// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import React from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSvcybjzuFAOkQ_ZX-h3NjkWMuW6C2u2A",
  authDomain: "cinemagpt-cb784.firebaseapp.com",
  projectId: "cinemagpt-cb784",
  storageBucket: "cinemagpt-cb784.firebasestorage.app",
  messagingSenderId: "14806987610",
  appId: "1:14806987610:web:a65dec416a73f978bdf963",
  measurementId: "G-Z7RGH2KRY5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();