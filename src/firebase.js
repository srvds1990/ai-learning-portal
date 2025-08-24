// src/firebase.js

// Import the functions you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // <-- This is the missing import

const firebaseConfig = {
  apiKey: "AIzaSyAoRFsq7mYPWZDp5O4J1zm81XCS8UsPYSE",
  authDomain: "ai-learning-portal-f286c.firebaseapp.com",
  projectId: "ai-learning-portal-f286c",
  storageBucket: "ai-learning-portal-f286c.firebasestorage.app",
  messagingSenderId: "426551098360",
  appId: "1:426551098360:web:21e3b0ff111a09ea67740d",
  measurementId: "G-NYKGC78EXX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // <-- This initializes the Firestore service

// Export the database instance for use in other components
export { db };