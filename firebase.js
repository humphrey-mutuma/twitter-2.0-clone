// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZCc7zZ_7hhAwJKo1qxz8pGI4XD6yTMlo",
  authDomain: "twitter2-clone.firebaseapp.com",
  projectId: "twitter2-clone",
  storageBucket: "twitter2-clone.appspot.com",
  messagingSenderId: "354820642934",
  appId: "1:354820642934:web:3a05af9225c0107020a757",
};

// Initialize Firebase if none is already initialized
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
