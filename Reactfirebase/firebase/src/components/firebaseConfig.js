
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAgqKBnUhCj0bchh3rOBp6v_8xYawT4QXM",
  authDomain: "fir-firebase-7c11c.firebaseapp.com",
  projectId: "fir-firebase-7c11c",
  storageBucket: "fir-firebase-7c11c.appspot.com",
  messagingSenderId: "274295492355",
  appId: "1:274295492355:web:735af0926953732a36e336",
  measurementId: "G-CNPEHQ65WZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth=getAuth(app);