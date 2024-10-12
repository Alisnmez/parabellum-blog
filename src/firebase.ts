// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGlLIbZ82LoyVuXIcB-BhVZtPLxGNaztE",
  authDomain: "parabellum-blog.firebaseapp.com",
  projectId: "parabellum-blog",
  storageBucket: "parabellum-blog.appspot.com",
  messagingSenderId: "498867787617",
  appId: "1:498867787617:web:80d0e325e6dadd709ad720",
  measurementId: "G-X37GPR0PHT"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
