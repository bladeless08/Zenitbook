import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEWYJEp1sGbinUmp499NnT1RoMc8oCZ3o",
  authDomain: "zenitbook-ed5f4.firebaseapp.com",
  projectId: "zenitbook-ed5f4",
  storageBucket: "zenitbook-ed5f4.firebasestorage.app",
  messagingSenderId: "554120414198",
  appId: "1:554120414198:web:2ee1893e082f4edc30bdd7",
  measurementId: "G-0NV9YQF49G"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Firestore
const db = firebaseApp.firestore();

// Auth
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
