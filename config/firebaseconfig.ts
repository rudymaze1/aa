import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc  } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";



const firebaseConfig = {
  apiKey: "AIzaSyAOfmffv597xfoOh6um1Ne3nKOPQ45EAHo",
  authDomain: "aacad-91266.firebaseapp.com",
  projectId: "aacad-91266",
  storageBucket: "aacad-91266.firebasestorage.app",
  messagingSenderId: "956749586741",
  appId: "1:956749586741:web:a00a06fb301b2ca9446c7c",
  measurementId: "G-WZC8YCGGFZ"
};

const app = initializeApp(firebaseConfig);
const FIREBASE_APP = initializeApp(firebaseConfig);
const FIREBASE_DB = getFirestore(FIREBASE_APP);

// Initialize Firebase Auth with AsyncStorage for persistence
const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { FIREBASE_APP, FIREBASE_DB, FIREBASE_AUTH };

