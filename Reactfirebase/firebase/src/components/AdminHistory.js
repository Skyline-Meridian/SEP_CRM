import React, { useEffect, useState } from "react";
import QuizsDataService from "../services/quiz.services";
import Navbar from "./Navbar";
import "./styles/admin.css";

export default function AdminHistory() {
  const [show, setShow] = useState([]);
  const getAlldata = async () => {
    const data = await QuizsDataService.getAllQuizs();
    console.log(data?.docs?.map((doc)=>({...doc.data()})));
    setShow(data?.docs?.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  useEffect(() => {
    getAlldata();
  }, []);

  let id = 1;

  return (
    <>
    <Navbar/>
      <div className="card">
      <button onClick={()=>getAlldata()}>refesh</button>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>Date</th>
              <th>Quiz Name</th>
              <th>Start Time</th>
              <th>End Time</th>
            </tr>
          </thead>
          <thead>
            {show?.map((e) => {
              return (
                <>
                  <tr>
                    <td>{id++}</td>
                    <td>{e?.date}</td>
                    <td>{e?.quizQuestionName}</td>
                    <td>{e?.startTime}</td>
                    <td>{e?.endTime}</td>
                  </tr>
                </>
              );
            })}
          </thead>
        </table>
      </div>
    </>
  );
}
