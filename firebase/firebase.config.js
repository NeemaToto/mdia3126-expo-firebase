// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbF8Au3Wrm8r8WBmtdiSSFgZd2rQnG4EU",
  authDomain: "lab2-d3d05.firebaseapp.com",
  projectId: "lab2-d3d05",
  storageBucket: "lab2-d3d05.appspot.com",
  messagingSenderId: "459373446756",
  appId: "1:459373446756:web:eb13aa9091ba9b171ac171"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)