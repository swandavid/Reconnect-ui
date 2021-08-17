import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyBL1y6HC2Q8cW3ijdX5GAbwH0jWZC6EWm8",
  authDomain: "reconnect-login.firebaseapp.com",
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: "reconnect-login",
  storageBucket: "reconnect-login.appspot.com",
  messagingSenderId: "514256244094",
  appId: "1:514256244094:web:d319b7b473af7c7fdc772f"
})

export const auth = app.auth()
export default app
