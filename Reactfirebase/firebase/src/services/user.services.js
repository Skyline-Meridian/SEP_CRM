import { db } from "../components/firebaseConfig";
import {
  collection,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query, 
  where
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
        const q = query(userCollectionRef, where("id", "==", id));
        const querySnapshot = getDocs(q);
        return querySnapshot
    }
    
    
}

export default new UsersDataService();