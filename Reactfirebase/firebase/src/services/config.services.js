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
} from "firebase/firestore";


const configCollectionRef = collection(db, "config");

class ConfigService {

  addConfig = (newConfig) => {
    console.log(newConfig);
    return addDoc(configCollectionRef, newConfig);
  };

  getAllConfig = () => {
    return getDocs(configCollectionRef);
  };

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

export default new ConfigService();
