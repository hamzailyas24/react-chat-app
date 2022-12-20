import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6FzFU3vCMWF3CKDN3t1htd3TGCGoyLnI",
  authDomain: "chat-app-79ecc.firebaseapp.com",
  projectId: "chat-app-79ecc",
  storageBucket: "chat-app-79ecc.appspot.com",
  messagingSenderId: "903223846911",
  appId: "1:903223846911:web:4584f689a8ce6a0374e9ca",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
