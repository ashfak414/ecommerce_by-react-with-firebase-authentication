import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwsP8KHtdOKydOX0YPPrYPdDcnlUFxAFA",
  authDomain: "assignment3-52e64.firebaseapp.com",
  projectId: "assignment3-52e64",
  storageBucket: "assignment3-52e64.firebasestorage.app",
  messagingSenderId: "554623671692",
  appId: "1:554623671692:web:9656122e9da7cd15b14aa9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
