// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "blog-app-413309.firebaseapp.com",
  projectId: "blog-app-413309",
  storageBucket: "blog-app-413309.appspot.com",
  messagingSenderId: "987838428516",
  appId: "1:987838428516:web:1e8adf3ebafaff40633671",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
