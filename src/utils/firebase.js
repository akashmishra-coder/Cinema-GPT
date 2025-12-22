// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDW4iKRNq8kLvfSP1rZSCFJuxCGlPKzBYc",
  authDomain: "cinemagpt-320c7.firebaseapp.com",
  projectId: "cinemagpt-320c7",
  storageBucket: "cinemagpt-320c7.firebasestorage.app",
  messagingSenderId: "291095344890",
  appId: "1:291095344890:web:0680911c0d4dbe67bafb43",
  measurementId: "G-T8QZ82X73V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 export const auth = getAuth();