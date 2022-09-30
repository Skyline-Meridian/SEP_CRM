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
  arrayUnion,
  query,
  where,
} from "firebase/firestore";

const quizCollectionRef = collection(db, "userAnswerMap");

class UserAnswerMapService {
  addUserAnswerMap = (newUserAnswerMap) => {
    return addDoc(quizCollectionRef, newUserAnswerMap);
  };

  getAllUserAnswerMap = () => {
    return getDocs(quizCollectionRef);
  };

  getUserAnswerMap=async(fildName,fildValue)=>{
    const q = await query(quizCollectionRef, where(fildName, "==", fildValue));
    const querySnapshot = getDocs(q);
    return querySnapshot
}

  allRedayExitsAnswer = (fildName,fildValue) => {
    // console.log(fildName, findFind);
    const q = query(quizCollectionRef, where(fildName[0], 'array-contains', [fildValue]));
    const querySnapshot = getDocs(q);
    return querySnapshot;
  };
  // allRedayExitsAnswer = async(id) => {
  //   const docRef = doc(db, "userAnswerMap","date");
  //   const docSnap = await getDoc(docRef);
    
  //   if (docSnap.exists()) {
  //     console.log("Document data:", docSnap.data());
  //   } else {
  //     // doc.data() will be undefined in this case
  //     console.log("No such document!");
  //   }
  // };

  // genret custm id
  // createAutoId=async(data)=>{
  //    const id= await setDoc(doc(db, "quizs", "new-quizs-id"), data);
  //    return id;
  // }

  // deleteDOC=async(data)=>{
  //     const dele=await deleteDoc(doc(db, "quizs", data));
  //     return dele;
  // }

  multipleConditional=(first,firstValue,second,secondValue)=>{
    const q = query(quizCollectionRef, where(first,"==",firstValue),where(second,"==",secondValue));
    const querySnapshot = getDocs(q);
    return querySnapshot;
  }

  allRedayExitDoc = async (eventName, dataValue) => {
    let data;
    const docRef = doc(db, "userAnswerMap", eventName);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return(
        data="update"
      )
    } else {
      // doc.data() will be undefined in this case
       await setDoc(doc(db, "userAnswerMap", eventName), dataValue);
       return(
        data="create"
      )
    }
    
  };

  updateUserAnswerMapService = async (eventName, dataValue) => {
    const washingtonRef = doc(db, "userAnswerMap", eventName);

    await updateDoc(washingtonRef,{
        userMap:arrayUnion(dataValue)
    });
  };

  updateUserAnswerMapServiceIsSubmit = async (eventName, dataValue) => {
    const washingtonRef = doc(db, "userAnswerMap", eventName);

    await updateDoc(washingtonRef,dataValue);
  };


}

export default new UserAnswerMapService();
