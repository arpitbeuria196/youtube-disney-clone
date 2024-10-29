// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // Import getAuth and GoogleAuthProvider
import { getFirestore } from "firebase/firestore"; // Import Firestore
import { getStorage } from "firebase/storage"; // Import Storage

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3YT8ncPQz65VwOS6t4Eg1xG2Hj1Z8ogk",
  authDomain: "disneyhotstar-900c6.firebaseapp.com",
  projectId: "disneyhotstar-900c6",
  storageBucket: "disneyhotstar-900c6.appspot.com",
  messagingSenderId: "20164689314",
  appId: "1:20164689314:web:60a93117773c6fa59c06fb",
  measurementId: "G-HE420ZRGSK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize Auth
const provider = new GoogleAuthProvider(); // Create Google Auth Provider
const storage = getStorage(app); // Initialize Storage
const db = getFirestore(app); // Initialize Firestore

export { auth, provider, storage };
export default db;
