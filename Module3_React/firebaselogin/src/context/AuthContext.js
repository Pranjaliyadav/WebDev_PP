import React, { useState, useContext, useEffect } from "react";
import { auth } from "../config/firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState("");
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function logout() {
    return auth.signOut;
  }

  function updateEmail(email){
    return currentUser.updateEmail(email);
  }

  function updatePassword(password){
return currentUser.updatePassword(password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  auth.onAuthStateChanged((user) => {
    setCurrentUser(user);
  });

  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
    updateEmail,
    updatePassword
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
