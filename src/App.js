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
  const [hasRating, setHasRating] = useState(true);
  const [rating, setRating] = useState(0);

  // Game mechanics
  const [currentXP, setCurrentXP] = useState(0);
  const [levelXP, setLevelXP] = useState(500);
  const [currentLevel, setCurrentLevel] = useState(1);

  var providerGoogle = new firebase.auth.GoogleAuthProvider();
  var providerTwitter = new firebase.auth.TwitterAuthProvider();

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

  const handleCompanionNameChange = () => {
    setCompanionName(companionName);
  }

  // Game mechanics
  const increaseXP = () => {
  }

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
          handleCompanionNameChange={handleCompanionNameChange}
          increaseXP={increaseXP}
          currentXP={currentXP}
          currentLevel={currentLevel}
          levelXP={levelXP}
          hasRating={hasRating}
          setHasRating={setHasRating}
          rating={rating}
          setRating={setRating}
          handleIncreaseXP={handleIncreaseXP}
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