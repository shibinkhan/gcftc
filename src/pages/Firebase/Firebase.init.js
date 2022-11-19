// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCzSXgygYZOKA3nTcMrDbR3tP_yg8_dPH8",
    authDomain: "gcftc-firebase.firebaseapp.com",
    projectId: "gcftc-firebase",
    storageBucket: "gcftc-firebase.appspot.com",
    messagingSenderId: "942276400114",
    appId: "1:942276400114:web:0d479fd4bd8b240b38916b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;