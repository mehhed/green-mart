import {
  createUserWithEmailAndPassword,
  deleteUser,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";

import app from "../firebse.config";

export const AuthProvider = createContext(null);

const AuthenticationProvider = ({ children }) => {
  const auth = getAuth(app);

  // current user use state
  const [currentUser, setUser] = useState(null);
  // loader
  const [loader, setLoader] = useState(true);

  // authenthication methoud
  const signUP = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signin = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutuser = () => {
    setLoader(true);
    return signOut(auth);
  };

  // to do
  const userDelete = () => {
    return deleteUser(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoader(false);
    });
    return unsubscribe;
  }, [auth]);

  const providerValue = {
    signUP,
    signin,
    signOutuser,
    currentUser,
    setUser,
    loader,
    setLoader,
  };

  return (
    <AuthProvider.Provider value={providerValue}>
      {children}
    </AuthProvider.Provider>
  );
};

export default AuthenticationProvider;
