import firebase from "firebase/app";

import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyALV2b7wwhHk1NHbFwQXAH_P820i8Y7jtk",
    authDomain: "auth-development-77270.firebaseapp.com",
    projectId: "auth-development-77270",
    storageBucket: "auth-development-77270.appspot.com",
    messagingSenderId: "720853369302",
    appId: "1:720853369302:web:0dae6625fc55584ce2a477"
})

export const auth = app.auth();
export default app;