// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7KZhT4_QG-uSlrzRgFF9va-JXzVLQGGs",
  authDomain: "ecommerce-6b84d.firebaseapp.com",
  databaseURL: "https://ecommerce-6b84d-default-rtdb.firebaseio.com",
  projectId: "ecommerce-6b84d",
  storageBucket: "ecommerce-6b84d.appspot.com",
  messagingSenderId: "971460776240",
  appId: "1:971460776240:web:cb3fc3fab0e100ce1c78f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
