// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrWnMxIUCuPc3nhkrwTttFpZ_tkwZleJI",
  authDomain: "recipe-hunter-86035.firebaseapp.com",
  projectId: "recipe-hunter-86035",
  storageBucket: "recipe-hunter-86035.appspot.com",
  messagingSenderId: "776064576054",
  appId: "1:776064576054:web:80fc66c4390ae7e8858697"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;