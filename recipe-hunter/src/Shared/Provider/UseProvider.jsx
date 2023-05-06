import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../../firebase.config";


export const authProvider = createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [error,setError] = useState('');
  const auth = getAuth(app);
  // user Create
  const crateUserInfo = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
    setLoading(false)
  };
  // User sign in
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
    setLoading(false)
  };

  //  SignOut from
  const logOut = () => {
    return signOut(auth);
    setLoading(false);
  };
  // state Change
  useEffect(() => {
    const unchangedState = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
      setLoading(false);
    });

    return () => {
      unchangedState();
    };
  }, []);

  const authInfo = {
    crateUserInfo,
    signIn,
    user,
    logOut,
    loading,
    error
  };
  return (
    <div>
      <authProvider.Provider value={authInfo}>{children}</authProvider.Provider>
    </div>
  );
};

export default UserProvider;
