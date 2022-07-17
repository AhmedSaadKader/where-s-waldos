// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7L2fXihu83JvmqlKAKvJW6uW3uvZJxMc",
  authDomain: "where-s-waldo-az.firebaseapp.com",
  projectId: "where-s-waldo-az",
  storageBucket: "where-s-waldo-az.appspot.com",
  messagingSenderId: "897475141112",
  appId: "1:897475141112:web:e3a8ca14fb41cd919c8a0d",
  measurementId: "G-BMWLHPTE5J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
