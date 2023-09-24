// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPJ1YmtquXajJyMjlp0uMPNpIwDPZt2W8",
  authDomain: "fixitwizards.firebaseapp.com",
  projectId: "fixitwizards",
  storageBucket: "fixitwizards.appspot.com",
  messagingSenderId: "437274084851",
  appId: "1:437274084851:web:d714d7a1873860daa47e86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
