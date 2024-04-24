// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvn3WpGq_KSFnsAYB4NCQq6yzlooE98QM",
  authDomain: "netflixgpt-81a15.firebaseapp.com",
  projectId: "netflixgpt-81a15",
  storageBucket: "netflixgpt-81a15.appspot.com",
  messagingSenderId: "293247293795",
  appId: "1:293247293795:web:a2c13d5b3425434e191b56",
  measurementId: "G-LB9C1P192E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
