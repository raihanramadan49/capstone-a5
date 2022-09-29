// Import the functions you need from the SDKs you need
// import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA3feNFGJKlKB-c5vWos7Of3fAGvZ8fLIM",
    authDomain: "capstone-a5.firebaseapp.com",
    databaseURL: "https://capstone-a5-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "capstone-a5",
    storageBucket: "capstone-a5.appspot.com",
    messagingSenderId: "530599335770",
    appId: "1:530599335770:web:f890f4ceb8258c45f54563",
    measurementId: "G-9Y61XC3BYS"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
