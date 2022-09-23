import React, { useEffect, useState } from "react";
import "./styles/admin.css";
export default function User() {
  const [quiz, setQuiz] = useState("");
  const [show, setShow] = useState([]);

  const handelInput = (e) => {
    e.preventDefault();


    alert(JSON.stringify(quiz));
  };
// 
  const updateData = () => {
    const res = localStorage.getItem("quizs");
    const convert = JSON.parse(res);
    setShow(convert);
  };

  useEffect(() => {
    if (localStorage.getItem("quizs") == null) {
      localStorage.setItem("quizs", "[]");
    }
    updateData();
  }, []);
  
  console.log(quiz);
  return (
    <>
      <div className="card">
        <div className="container">
          <label htmlFor="date">Question answer</label>
          {show?.map((e) => {
            console.log(e);
            return (
              <>
                <div>
                  <label htmlFor="question">{e.question}</label>
                  {e?.option?.map((m) => {
                    return (
                      <>
                        <div>
                          <input
                            type="radio"
                            id="vehicle1"
                            name="vehicle1"
                            value={m?.A}
                            onChange={(e) => {
                              setQuiz(...quiz,e.target.value);
                            }}
                          />
                          <label for="vehicle1"> {m?.A}</label>
                        </div>
                      </>
                    );
                  })}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
