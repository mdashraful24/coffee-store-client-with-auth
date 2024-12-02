// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD-Khy4bAh5xz-7MwExNpcgGqrB5T874y4",
    authDomain: "coffee-store-d3e8e.firebaseapp.com",
    projectId: "coffee-store-d3e8e",
    storageBucket: "coffee-store-d3e8e.firebasestorage.app",
    messagingSenderId: "269549779741",
    appId: "1:269549779741:web:3bf5f46197b20683ee7ff4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);