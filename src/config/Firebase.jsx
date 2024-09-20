// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { collection, doc, getFirestore, setDoc, updateDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZPId89p_FfWESHh6a7paO8LCnsJdq0FA",
  authDomain: "blog-app-84171.firebaseapp.com",
  projectId: "blog-app-84171",
  storageBucket: "blog-app-84171.appspot.com",
  messagingSenderId: "243858100499",
  appId: "1:243858100499:web:68c0c8cf51320f42644ae6",
  measurementId: "G-7B4JD6S3TG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

// Signup Function
const signup = async (username,email, password) => {
  try {
    
    await createUserWithEmailAndPassword(auth, email, password);
    
    

    

    alert("Signed up successfully!");
    return true;
  } catch (error) {
    alert(`${error.code}`)
    return false;
  }
};

// Login Function
const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Successfully logged in!");
    return true;
  } catch (error) {
    alert(`${error.code}`)
    return false;
  }
};
const logout = ()=>{
  signOut(auth);
  alert("Logged Out Successfully")
}

// Exporting the necessary components
export { login, signup, db, auth,logout };
