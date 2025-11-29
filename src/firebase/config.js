// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqyf8oXBdctL8e8nw0mWjzA9lBWj5298A",
  authDomain: "ecommerce-project-kalma.firebaseapp.com",
  projectId: "ecommerce-project-kalma",
  storageBucket: "ecommerce-project-kalma.firebasestorage.app",
  messagingSenderId: "325205293774",
  appId: "1:325205293774:web:c10e27c2391e4a75ec2e9f",
};

// Initilaize Firestore
const app = initializeApp(firebaseConfig);

// Export Firestore
export const db = getFirestore(app);
