// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUMHBmW0Rb_tpPWIlocssJE3lflF-KNTs",
  authDomain: "netflixgpt-1e4fb.firebaseapp.com",
  projectId: "netflixgpt-1e4fb",
  storageBucket: "netflixgpt-1e4fb.appspot.com",
  messagingSenderId: "466637778745",
  appId: "1:466637778745:web:2a339e75837d19733642e8",
  measurementId: "G-M6MLNCWYVX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth()
