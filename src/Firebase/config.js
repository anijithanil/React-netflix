// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiP4jlUX-KdiQIR7tlrs-gZF4p9SA-6E8",
  authDomain: "netflix-clone1-f0a17.firebaseapp.com",
  projectId: "netflix-clone1-f0a17",
  storageBucket: "netflix-clone1-f0a17.appspot.com",
  messagingSenderId: "82860261524",
  appId: "1:82860261524:web:db182fb348fd6a9693b481",
  measurementId: "G-MGLGKEX6CH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth}
const db = getFirestore(app);
export default app
export {db}