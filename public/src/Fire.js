import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBL1y6HC2Q8cW3ijdX5GAbwH0jWZC6EWm8",
    authDomain: "reconnect-login.firebaseapp.com",
    projectId: "reconnect-login",
    storageBucket: "reconnect-login.appspot.com",
    messagingSenderId: "514256244094",
    appId: "1:514256244094:web:d319b7b473af7c7fdc772f",
    measurementId: "G-DMKN6CJTFK"
  };

const fire = firebase.initializeApp(firebaseConfig);

export default fire;