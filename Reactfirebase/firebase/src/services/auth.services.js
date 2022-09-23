import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../components/firebaseConfig";

class Authentication {
  login = async (email, password) => {
    let data;
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential?.user);
        const user = userCredential?.user?.uid;
        return (data = {
          id:user
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorCode);
        return (data = {
          errorCode:errorCode
        });
      });
    return data;
  };

  register = async (email, password) => {
    let data;
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        return (data = {
          id:user?.uid
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        return (data = {
          errorCode:errorCode
        });
      });

    return data;
  };
}

export default new Authentication();
