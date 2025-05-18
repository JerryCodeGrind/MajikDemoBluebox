// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRqvubcnpA1U00XCNKYhU9iDEBiwhKPH4",
  authDomain: "doctorweb-d4b5c.firebaseapp.com",
  projectId: "doctorweb-d4b5c",
  storageBucket: "doctorweb-d4b5c.firebasestorage.app",
  messagingSenderId: "325942932030",
  appId: "1:325942932030:web:f4a7cfae30a398c02fd76f",
  measurementId: "G-LYDFSY73QC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const db = getFirestore(app);

export { auth, provider, db };