// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCmYxXYOlqFn0attrWL72C3TjYt_NEVfBM",
    authDomain: "ts4u-task.firebaseapp.com",
    projectId: "ts4u-task",
    storageBucket: "ts4u-task.appspot.com",
    messagingSenderId: "845315766032",
    appId: "1:845315766032:web:ff6d6d269d87853432d795"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;