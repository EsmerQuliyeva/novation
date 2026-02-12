import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDxn1EueqfqD9QgatWw0tkwefFKD3xaAHg",
  authDomain: "novationblog.firebaseapp.com",
  projectId: "novationblog",
  storageBucket: "novationblog.appspot.com",
  messagingSenderId: "99513425684",
  appId: "1:99513425684:web:49e31f9c79c5b9e7556c01",
  measurementId: "G-3R0MXVJFES",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvide = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
