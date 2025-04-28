
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA4YyQXSUrFJ8g_8tIopjxsOv5fVxtLrc8",
    authDomain: "fir-practice-cee98.firebaseapp.com",
    projectId: "fir-practice-cee98",
    storageBucket: "fir-practice-cee98.firebasestorage.app",
    messagingSenderId: "990114736619",
    appId: "1:990114736619:web:4b0a7fcb3ff2f4b47d51ae"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Fetch cities from Firestore
// get data on firebase..
export const getCities = async () => {
    const querySnapshot = await getDocs(collection(db, 'testing'));
    let posts = [];
    querySnapshot.forEach((doc) => {
        posts.push({ id: doc.id, ...doc.data() });
    });
    return posts;
};