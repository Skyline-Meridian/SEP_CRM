import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Authentication from "../services/auth.services";
import UsersDataService from "../services/user.services";
import "./styles/navbar.module.css";
export default function Navbar() {
  const [user, setUser] = useState(null);
  const [exit, setExit] = useState(false);
  const navigate = useNavigate();

  const userExit = async () => {
    const data = await Authentication.exitsUser();
    // console.log(data?.id);
    if (data?.id == null) {
      setExit(false);
    } else setExit(true);

    const value = await UsersDataService.getUser(data?.id);
    value.forEach((doc) => {
      // console.log(doc.id, " => ", doc.data().isAdmin);

      if (doc.data().isAdmin == true) {
        setUser(true)
      } else {
        setUser(false)
      }
    });
  };

  useEffect(() => {
    userExit();
  }, []);

  const loOut = async () => {
    await Authentication.logOut();
    setExit(false);
    navigate("/login");
  };
  return (
    <>
      {exit ? (
        <ul>
        {
          user?
          <>
          <li>
            <Link  to="/admin">Admin</Link>
          </li>
          <li>
            <Link  to="/admin">Create Quiz</Link>
          </li>
          <li>

            <Link  to="/adminHistory">Histoty</Link>
          </li>
          </>
          :
          <>
          <li>
            <Link  to="/user">User</Link>
          </li>
          <li>
            <Link  to="/userHistory">Histoty</Link>
          </li>
          </>
        }


          <li style={{ float: "right" }}>
            <Link onClick={loOut} to="/login">LogOut</Link>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#news">News</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li style={{ float: "right" }}>
          <Link  to="/login">login</Link>
          </li>
        </ul>
      )}
    </>
  );
}
