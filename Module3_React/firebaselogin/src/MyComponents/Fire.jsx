import React, { useState, useEffect } from 'react';
import firebaseAuth from '../config/firebase';
import firebase from "../config/firebase";

const Fire = () => {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    

    const handleLogin = async() => {
        let response = await firebaseAuth.signInWithEmailAndPassword(username,password);
        console.log(response);
    }
    return (
        <div>
            <h1>Firebase Login</h1>
            <div>
                UserName{""} <input value={username} onChange= {(e) => setUsername(e.target.value)}></input>
                
            </div>
            <div>Password{""} <input value = {password} onChange= {(e) => setPassword(e.target.value)}></input></div>
            <button onClick = {handleLogin}>Login</button>
        </div>
      );
}
 
export default Fire;