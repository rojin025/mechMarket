// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzWbXliCN4E_j6VJVthsqT_HJ9-oEMl34",
  authDomain: "buy-and-sell-d7288.firebaseapp.com",
  projectId: "buy-and-sell-d7288",
  storageBucket: "buy-and-sell-d7288.firebasestorage.app",
  messagingSenderId: "910829662322",
  appId: "1:910829662322:web:7b3d8d4a79ff26618752eb",
  measurementId: "G-8K1QYQL90X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initaileze Firebase Authemntication and get a referece to the service
export const auth = getAuth(app);
export default app;
