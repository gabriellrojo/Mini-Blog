// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAAGRewm0OOWkA9YAb8HODh0HpPc2OMGY",
  authDomain: "mini-blog-6d615.firebaseapp.com",
  projectId: "mini-blog-6d615",
  storageBucket: "mini-blog-6d615.appspot.com",
  messagingSenderId: "307872330475",
  appId: "1:307872330475:web:355c6b83648e251fd244ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db }