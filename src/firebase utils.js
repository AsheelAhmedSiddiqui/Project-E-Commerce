// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCnGr1sJ0LZdAE7YBiqz2805vPY364i8pA",
	authDomain: "react-final-project-d994f.firebaseapp.com",
	databaseURL:
		"https://react-final-project-d994f-default-rtdb.asia-southeast1.firebasedatabase.app",
	projectId: "react-final-project-d994f",
	storageBucket: "react-final-project-d994f.appspot.com",
	messagingSenderId: "263497883954",
	appId: "1:263497883954:web:f283b2fd79f1d8c919f72b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage();

export { auth, db, storage };
