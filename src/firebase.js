// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDe9L_HbMRbO_I9cQX0Yk54IUqWO82zqSo",
  authDomain: "clone-3c627.firebaseapp.com",
  projectId: "clone-3c627",
  storageBucket: "clone-3c627.appspot.com",
  messagingSenderId: "907028731887",
  appId: "1:907028731887:web:ebfe1b492fac87c586c81a",
  measurementId: "G-L4RTQNV6L0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const signup = (email, password) => {
  console.log("Creating the Account.....");
  return createUserWithEmailAndPassword(auth, email, password);
};
export const signin = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logout = () => {
  return signOut(auth);
};
