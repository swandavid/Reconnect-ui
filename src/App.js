import "tailwindcss/dist/base.css";
import "./styles/globalStyles.css";
import React, { useState, useEffect } from 'react';
import fire from './Fire';
import firebase from "firebase/app";

/* Inner Pages */
import LoginPage from "./pages/Login.js";
import Hero from './pages/Hero.js';

function App() {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);
  const [companionName, setCompanionName] = useState('Edit Name');
  const [hasName, setHasName] = useState(false);
  const [hasRating, setHasRating] = useState(false);
  const [rating, setRating] = useState(0);

  // Added from Reconnect
  const http = require("https");

  // Game mechanics
  const [currentXP, setCurrentXP] = useState(0);
  const [levelXP, setLevelXP] = useState(500);
  const [currentLevel, setCurrentLevel] = useState(1);

  var providerGoogle = new firebase.auth.GoogleAuthProvider();
  var providerTwitter = new firebase.auth.TwitterAuthProvider();

  const chatbot = () => {
    let responses = [];
    console.log("in chatbot");
    window.watsonAssistantChatOptions = {
      integrationID: "0bca7870-6bd7-4d80-8a56-6635dcf3b431", // The ID of this integration.
      region: "us-south", // The region your integration is hosted in.
      serviceInstanceID: "ca70ca9a-7e6e-40bd-a663-c3bed2f8d8db", // The ID of your service instance.
      onLoad: function(instance) { 
          function handler(event) {
          let response = event.data.history.label;
          console.log(event.data); // You can also manipulate context here.
          if(event.data.history.hasOwnProperty("label")){  
            console.log(`ADDED: ${response}`); // You can also manipulate context here.
            responses.push(response);
          }
          if(response === "Yes" || response === "No"){
            console.log(`all responses: ${responses}`);
          }
        }function handlerReceive(event) {
          if(event.data.output.generic[0].text==="Alright here's some ideas!"){
            console.log("here are your ideas lol");
            connectDB2();
            }
            setRating(0);
            setHasRating(true);
        }
      instance.on({ type: "receive", handler: handlerReceive });
      instance.on({ type: "pre:send", handler: handler });
      instance.render(); }
    };
    setTimeout(function(){
      const t=document.createElement('script');
      t.src="https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js";
      document.head.appendChild(t);
    });
  };
  
  function connectDB2(){
    let options = {
      "method": "POST",
      "hostname": "bpe61bfd0365e9u4psdglite.db2.cloud.ibm.com",
      "port": null,
      "path": "/dbapi/v4/auth/token",
      "headers": {
          "content-type": "application/json",
          "x-deployment-id": "crn:v1:bluemix:public:dashdb-for-transactions:us-south:a/4df53a8e9e324c78916a8dc776accad3:90465ff2-ef4f-4e7f-a9ac-29a931cb761e::"
      }};

    let req = http.request(options, function (res) {
        let chunks = [];
        console.log("hi");
        res.on("data", function (chunk) {
            chunks.push(chunk);
        });

      res.on("end", function () {
          let body = Buffer.concat(chunks);
          let dbToken = JSON.parse(body).token;
          console.log(body.toString());
      });
    });

    req.write(JSON.stringify({ userid: 'gdk29717', password: '3FmH6NLemN561Utr'}));
    //req.write(JSON.stringify({ command: 'select' }));
    req.end(); 
  };

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  };

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  };

  const handleLoginGoogle = () => {
    clearErrors();
    fire
      .auth()
      .signInWithPopup(providerGoogle)
      .then((result) => {
        /* @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;

      }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;

      });
  };

  const handleLoginTwitter = () => {
    clearErrors();
    fire
      .auth()
      .signInWithPopup(providerTwitter)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
        // You can use these server side with your app's credentials to access the Twitter API.
        var token = credential.accessToken;
        var secret = credential.secret;

        // The signed-in user info.
        var user = result.user;

      }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;

      });
  }

  const handleLoginEmail = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        switch(err.code){
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break; 
        }
      });
  };

  const handleSignupEmail = () => {
      clearErrors();
      fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => {
        switch(err.code){
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break; 
        }
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if(user){
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, [])

  // Game mechanics
  const handleIncreaseXP = () => {
    // Need to improve for it to just be yes, but it works so far
    console.log('checking for answer');
    var answer = document.getElementsByName('answerType').value;
    console.log(answer);
      console.log('answer was yes');
      if (currentLevel<10){
        setCurrentXP(currentXP+100);
        // Check for level up
        if(currentXP>=levelXP){
          // Increase level
          setCurrentLevel(currentLevel+1);
          // Check for XP overflow
          setCurrentXP(currentXP-levelXP);
          // Set next levelXP
          setLevelXP(levelXP+(500*(currentLevel+1)));
        }
    }
    setHasRating(!hasRating);
  }

  return (
    <div className="App">
      {user ? (
        <Hero 
          handleLogout={handleLogout}
          setCompanionName={setCompanionName}
          companionName={companionName}
          hasName={hasName}
          setHasName={setHasName}
          currentXP={currentXP}
          currentLevel={currentLevel}
          levelXP={levelXP}
          hasRating={hasRating}
          rating={rating}
          setRating={setRating}
          handleIncreaseXP={handleIncreaseXP}

          // Chat bot
          chatbot={chatbot}
        />
      ) : (
        <LoginPage
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLoginEmail={handleLoginEmail}
          handleSignupEmail={handleSignupEmail}
          handleLoginGoogle={handleLoginGoogle}
          handleLoginTwitter={handleLoginTwitter}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}
        />
      )}
    </div>
  );
}

export default App;