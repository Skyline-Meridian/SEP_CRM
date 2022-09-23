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

const quizCollectionRef=collection(db,"quizs");

class QuizsDataService{
    addQuizs=(newQuiz)=>{
        return addDoc(quizCollectionRef,newQuiz);
    }

    getAllQuizs=()=>{
        return getDocs(quizCollectionRef);
    }
    
}

export default new QuizsDataService();
