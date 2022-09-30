import React, { useState } from "react";
import styles from "./styles/register.module.css";
import { Link, useNavigate } from "react-router-dom";
import Authentication from "../services/auth.services";
import UsersDataService from "../services/user.services";

export default function Register() {
  const [user, setUser] = useState("");
  const [res, setRes] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
      const data = await Authentication.register(user?.email, user?.password);
      setRes(data);
      const userData={
        id:data?.id,
        firstName:user?.firstName,
        lastName:user?.lastName,
        email:user?.email,
        isAdmin:false
      }
      
      const userTable=await UsersDataService.addUser(userData);
      console.log(userTable);

      if (userTable?.id !=null) {
        console.log("admin");
        navigate("/login");
      }


  };
  return (
    <>
      <div className={`${styles.box_form}`}>
        <div className={`${styles.left}`}>
          <img src="https://canopylab.com/wp-content/uploads/2020/05/Working-with-adaptive-quizzes-A-beginners-guide.jpg" />
        </div>
        <div className={`${styles.right}`}>
          {res?.errorCode}
          <h5>Register</h5>
          <p>
            Do have a account?{" "}
            <Link to="/login">login</Link> 
          </p>
          <div className={`${styles.inputs}`}>
            <input
              type="text"
              placeholder="Enter Your First Name"
              value={user.firstName}
              onChange={(e) => {
                setUser({ ...user, firstName: e.target.value });
              }}
            />
            <br />
            <input
              type="text"
              placeholder="Enter Your Last Name"
              value={user.lastName}
              onChange={(e) => {
                setUser({ ...user, lastName: e.target.value });
              }}
            />
            <br />
            <input
              type="email"
              placeholder="user name"
              value={user.email}
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
              }}
            />
            <br />
            <input
              type="password"
              placeholder="password"
              value={user.password}
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
            />
          </div>
          <br />
          <button onClick={handleSubmit}>SignUp</button>
        </div>
      </div>
    </>
  );
}
