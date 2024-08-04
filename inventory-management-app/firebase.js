// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4LLh010NpYPThJFc_9GfGlO3QlUgZTow",
  authDomain: "pantry-tracker-87024.firebaseapp.com",
  projectId: "pantry-tracker-87024",
  storageBucket: "pantry-tracker-87024.appspot.com",
  messagingSenderId: "749523034009",
  appId: "1:749523034009:web:790da014b09bb7c0f2bd08",
  measurementId: "G-BCT7Z7JJH9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);