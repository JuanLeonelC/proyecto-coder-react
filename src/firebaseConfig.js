// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkemtHueGnul1Nmjh7-If4fXrQ4DiwMNM",
  authDomain: "coderhouse-react-8b6dd.firebaseapp.com",
  projectId: "coderhouse-react-8b6dd",
  storageBucket: "coderhouse-react-8b6dd.appspot.com",
  messagingSenderId: "88758941042",
  appId: "1:88758941042:web:671c0c3b2b951b6dbd99eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;