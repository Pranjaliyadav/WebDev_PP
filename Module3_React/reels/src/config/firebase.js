import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyAnNyHEK4NId3BQ5IJCiB7Op-5y67qxWV4",
    authDomain: "react-login-f3252.firebaseapp.com",
    projectId: "react-login-f3252",
    storageBucket: "react-login-f3252.appspot.com",
    messagingSenderId: "764794385894",
    appId: "1:764794385894:web:9f738cbeed429d957e1227"
  };

let firebaseApp = firebase.initializeApp(firebaseConfig);
export let firebaseAuth = firebaseApp.auth();
export let firebaseStorage = firebaseApp.storage();
export let firebaseDB = firebaseApp.firestore(); 

