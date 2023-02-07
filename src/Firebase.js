// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAD4woQp2vqU4OgiCt1cnl03SQUpRPqyHM",
    authDomain: "quizapp-a43c6.firebaseapp.com",
    projectId: "quizapp-a43c6",
    storageBucket: "quizapp-a43c6.appspot.com",
    messagingSenderId: "312893508864",
    appId: "1:312893508864:web:af44754ecb31dbc117b7e5",
    measurementId: "G-V94PTPWE80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();