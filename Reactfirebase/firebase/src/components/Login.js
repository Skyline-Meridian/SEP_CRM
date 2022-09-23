import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Authentication from "../services/auth.services";
import styles from "./styles/login.module.css";

export default function Login() {
  const [user, setUser] = useState("");
  const [res, setRes] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await Authentication.login(user.email, user.password);
    console.log(data);
    setRes(data);
  };

  return (
    <>
      <div className={`${styles.box_form}`}>
        <div className={`${styles.left}`}>
          <img src="https://blog.hubspot.com/hubfs/google-quiz.jpg" />
        </div>
        <div className={`${styles.right}`}>
        {
          res?.errorCode
        }
          <h5>Login</h5>
          <p>
            Do have a account?{" "}
            <Link to="/register">Creat Your Account</Link> it takes less than a
            minute
          </p>
          <div className={`${styles.inputs}`}>
            <input type="text" placeholder="user name"
              value={user.email}
              onChange={(e) => {
                setUser({ ...user, email: e.target.value })
              }}
            />
            <br />
            <input type="password" placeholder="password"
              value={user.password}
              onChange={(e) => {
                setUser({ ...user, password: e.target.value })
              }}
            />
          </div>
          <br />
          <br />
          <div className={`${styles.remember_me_forget_password}`}>
            {/* Angular */}
            <label>
              <input type="checkbox" name="item" defaultChecked />
              <span className="text_checkbox">Remember me</span>
            </label>
            <p>
              <Link to="/forget">forget password?</Link>
            </p>
          </div>
          <br />
          <button onClick={handleSubmit}>Login</button>
        </div>
      </div>
    </>
  );
}
