import { db } from "../components/firebaseConfig";
import {
  collection,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const userCollectionRef=collection(db,"users");

class UsersDataService{
    addUser=(newUser)=>{
        return addDoc(userCollectionRef,newUser);
    }

    getAllUsers=()=>{
        return getDocs(userCollectionRef);
    }

    getUser=(id)=>{
        const userDoc= doc(db,"users",id)
        return getDoc(userDoc);
    }
    
    
}

export default new UsersDataService();