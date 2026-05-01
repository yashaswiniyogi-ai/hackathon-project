import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmgJikD9cB2rM3oRQpBYue_46bc-auX7E",
  authDomain: "fir-frontend-8c9ac.firebaseapp.com",
  projectId: "fir-frontend-8c9ac",
  storageBucket: "fir-frontend-8c9ac.firebasestorage.app",
  messagingSenderId: "147340623838",
  appId: "1:147340623838:web:e2dd6a42b7d2e51dd7a74f"
};

// Initialize Firebase


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);