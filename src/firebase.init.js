// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCvEoefAJLMybDIsD_XaZAZu0f5l4BgSeA",
    authDomain: "itbl-hrms.firebaseapp.com",
    projectId: "itbl-hrms",
    storageBucket: "itbl-hrms.appspot.com",
    messagingSenderId: "220772618963",
    appId: "1:220772618963:web:695e437960f14e9efb3a26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;