// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBT1TL_4sLw1q7Fw47wdh88avDmaDJi8zw",
    authDomain: "animal-toys-marketplace.firebaseapp.com",
    projectId: "animal-toys-marketplace",
    storageBucket: "animal-toys-marketplace.appspot.com",
    messagingSenderId: "181356413123",
    appId: "1:181356413123:web:014a57ecb18651b7f26276"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;