


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxf6YPM6EEV3nfPF9IfaratuVK-HHDEn8",
  authDomain: "disney-clone-5a8e0.firebaseapp.com",
  projectId: "disney-clone-5a8e0",
  storageBucket: "disney-clone-5a8e0.appspot.com",
  messagingSenderId: "432344775457",
  appId: "1:432344775457:web:82ce3d2d8c549d64809c60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default db;
