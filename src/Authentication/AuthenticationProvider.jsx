import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext } from "react";
import { GoogleAuthProvider } from "firebase/auth/cordova";
import app from "../firebase.init";

export const AuthProvider = createContext(null);

const AuthenticationProvider = ({ children }) => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);

  // authenthication methoud
  const signUP = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutuser = () => {
    return signOut(auth);
  };

  const signUpByGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  const providerValue = { signUP, signUpByGoogle, signin, signOutuser };

  return (
    <AuthProvider.Provider value={providerValue}>
      {children}
    </AuthProvider.Provider>
  );
};

export default AuthenticationProvider;
