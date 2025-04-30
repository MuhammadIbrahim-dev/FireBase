import { initializeApp } from 'firebase/app';   
import { getFirestore } from 'firebase/firestore'; // Use the full Firestore SDK

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA4YyQXSUrFJ8g_8tIopjxsOv5fVxtLrc8",
    authDomain: "fir-practice-cee98.firebaseapp.com",
    projectId: "fir-practice-cee98",
    storageBucket: "fir-practice-cee98.appspot.com", // Corrected the storage bucket URL
    messagingSenderId: "990114736619",
    appId: "1:990114736619:web:4b0a7fcb3ff2f4b47d51ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);