// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAT7_bKyFGB_MIIMhJlSVQHMsABwnnyQmI",
  authDomain: "tictacpro-d3605.firebaseapp.com",
  projectId: "tictacpro-d3605",
  storageBucket: "tictacpro-d3605.appspot.com",
  messagingSenderId: "317073812805",
  appId: "1:317073812805:web:533fa2d356cd3252a8e22c",
  measurementId: "G-26QY9VJSPH"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);