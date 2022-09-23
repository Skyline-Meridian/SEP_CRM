import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAgqKBnUhCj0bchh3rOBp6v_8xYawT4QXM",
  authDomain: "fir-firebase-7c11c.firebaseapp.com",
  projectId: "fir-firebase-7c11c",
  storageBucket: "fir-firebase-7c11c.appspot.com",
  messagingSenderId: "274295492355",
  appId: "1:274295492355:web:735af0926953732a36e336",
  measurementId: "G-CNPEHQ65WZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const email = document.getElementById("email");
const password = document.getElementById("password");
const loginform = document.getElementById("loginform");
const error_login = document.getElementById("error_login");
// register
const register = document.getElementById("register");
const massage_show = document.getElementById("massage_show");

loginform.addEventListener("click", (e) => {
  e.preventDefault();

  const emaliValue = email.value.trim();
  const passwordValue = password.value.trim();

  signInWithEmailAndPassword(auth, emaliValue, passwordValue)
    .then((userCredential) => {
      location.replace("welcome.html");
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);
      const errorMessage = error.message;
      error_login.innerHTML = errorCode;
    });
});

// register

register.addEventListener("click", (e) => {
  e.preventDefault();

  const emaliValue = email.value.trim();
  const passwordValue = password.value.trim();
  console.log(emaliValue);

  createUserWithEmailAndPassword(auth,emaliValue, passwordValue)
      .then(() => {
          location.replace("login.html");
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          massage_show.innerHTML = errorMessage;
      });
})
