// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkqqUOW1wjn5o9O_cbfSFgjX1IuliC_ME",
  authDomain: "ass-1-2d769.firebaseapp.com",
  projectId: "ass-1-2d769",
  storageBucket: "ass-1-2d769.firebasestorage.app",
  messagingSenderId: "574449149129",
  appId: "1:574449149129:web:3e7199d73e30ea5abb1918",
  measurementId: "G-QYXYCJ436J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);