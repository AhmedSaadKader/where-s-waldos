// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAonqAkZ2oS3CbrA3jN_PzKOOj7PK6E6ic",
  authDomain: "where-s-waldo-aza.firebaseapp.com",
  projectId: "where-s-waldo-aza",
  storageBucket: "where-s-waldo-aza.appspot.com",
  messagingSenderId: "517744756545",
  appId: "1:517744756545:web:cb92f17595f86ffe0583c0",
  databaseURL: "https://where-s-waldo-aza-default-rtdb.europe-west1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const database = getDatabase(app);
