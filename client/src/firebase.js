// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuCObM-bHP-ihI6349qTeoyrlM-07956U",
  authDomain: "titan-minds-39a3f.firebaseapp.com",
  projectId: "titan-minds-39a3f",
  storageBucket: "titan-minds-39a3f.appspot.com",
  messagingSenderId: "168597006334",
  appId: "1:168597006334:web:f34078b4747656f67442af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };
