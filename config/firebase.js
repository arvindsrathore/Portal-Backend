// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAVtuQPW2bYkyRxwFOgkHypai3QWxpkKHQ",
  authDomain: "portal-b7ef3.firebaseapp.com",
  projectId: "portal-b7ef3",
  storageBucket: "portal-b7ef3.appspot.com",
  messagingSenderId: "464943340055",
  appId: "1:464943340055:web:227e29262f9789314dda52",
  measurementId: "G-ZZ0BYT1MZQ"
};

// Initialize Firebase
export const appFirebase = initializeApp(firebaseConfig);
export const auth = getAuth(appFirebase);