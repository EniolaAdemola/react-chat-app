// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAEjfIf30gSc2ybzPIBJ-p586h3J0YEfaw",
	authDomain: "eniola-chat-app.firebaseapp.com",
	projectId: "eniola-chat-app",
	storageBucket: "eniola-chat-app.appspot.com",
	messagingSenderId: "713250761899",
	appId: "1:713250761899:web:10cbe24432d6e8a70ddbee",
	measurementId: "G-45FC1HR3KP",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
// Create a root reference
export const storage = getStorage();
export const db = getFirestore();
