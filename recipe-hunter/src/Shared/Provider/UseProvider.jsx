import React, { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase.config";


export const authProvider = createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [error,setError] = useState('');
  const [photoUrl,setPhotoUrl] = useState();
  const [displayName,setDisplayName] = useState('');
  const auth = getAuth(app);
  // user Create
  const crateUserInfo = (email, password) => {
    setLoading(false)
    return createUserWithEmailAndPassword(auth, email, password);
    
  };
  // User sign in
  const signIn = (email, password) => {
    setLoading(false)
    return signInWithEmailAndPassword(auth, email, password);
   
  };
  // Google SIgn in Method 

  const googleSignInMethod = ()=>{
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  }
  // Github Sign in Method 
  const gitHubSignInMethod = ()=>{
    const gitProvider = new GithubAuthProvider();
    return signInWithPopup(auth, gitProvider);
  }

  //  SignOut from
  const logOut = () => {
    setLoading(false);
    return signOut(auth);
   
  };



  const updateProfileUser = async (displayName, photoUrl) => {
    setLoading(true);
    const currentUser = auth.currentUser;
    const promises = [];
    if (displayName !== currentUser.displayName) {
      promises.push(updateProfile(currentUser, { displayName }));
    }
    if (photoUrl) {
      promises.push(updateProfile(currentUser, { photoURL: photoUrl }));
    }
    await Promise.all(promises);
    setUser(auth.currentUser);
    setDisplayName(auth.currentUser.displayName);
    setPhotoUrl(auth.currentUser.photoURL);
    setLoading(false);
  };
  

  // state Change
  useEffect(() => {
    const unchangedState = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
      if (currentUser) {
        setDisplayName(currentUser.displayName);
        setPhotoUrl(currentUser.photoURL);
        console.log(currentUser.photoURL);
      } else {
        setDisplayName('');
        setPhotoUrl('');
      }
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
    updateProfileUser,
    logOut,
    loading,
    error,
    photoUrl,
    displayName,
    googleSignInMethod,
    gitHubSignInMethod,
    
  };
  return (
    <div>
      <authProvider.Provider value={authInfo}>{children}</authProvider.Provider>
    </div>
  );
};

export default UserProvider;
