// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref} from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// [https://firebase.google.com/docs/web/setup#available-libraries](https://firebase.google.com/docs/web/setup#available-libraries)

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyACoAbSGzyZqeNSVdzo4jPAnJ0YNks8CJg",
    authDomain: "[flashcadrds.firebaseapp.com](http://flashcadrds.firebaseapp.com/)",
    projectId: "flashcadrds",
    storageBucket: "[flashcadrds.appspot.com](http://flashcadrds.appspot.com/)",
    messagingSenderId: "80925992042",
    appId: "1:80925992042:web:caa8c3f5adc1d774bdd613",
    databaseURL: "https://flashcadrds-default-rtdb.europe-west1.firebasedatabase.app/"
};

// Initialize Firebase
initializeApp(firebaseConfig);


export const database = getDatabase()
