import { db } from "../components/firebaseConfig";
import {
  collection,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  setDoc,
  query,
  where,
} from "firebase/firestore";

const quizCollectionRef = collection(db, "quizs");


class QuizsDataService {
  addQuizs = (newQuiz) => {
    return addDoc(quizCollectionRef, newQuiz);
  };


  getAllQuizs = () => {
    return getDocs(quizCollectionRef);
  };

  findQuizData=(fieldName,fieldValue)=>{
    const q = query(quizCollectionRef, where(fieldName, "==", fieldValue));
    const querySnapshot = getDocs(q);
    return querySnapshot
}

  // genret custm id
  // createAutoId=async(data)=>{
  //    const id= await setDoc(doc(db, "quizs", "new-quizs-id"), data);
  //    return id;
  // }

  // deleteDOC=async(data)=>{
  //     const dele=await deleteDoc(doc(db, "quizs", data));
  //     return dele;
  // }

  // updateQuiz = async (id,data) => {
  //   const washingtonRef = doc(db, "quizs", id);

  //   // Set the "capital" field of the city 'DC'
  //   await updateDoc(washingtonRef, {
  //       quizQuestionName:data
  //   });
  // };
}

export default new QuizsDataService();
