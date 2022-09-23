import React, { useEffect, useState } from "react";
import "./styles/admin.css";

export default function Admin() {
  const [quiz, setQuiz] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [show, setShow] = useState([]);
  const [showHide, setShowHide] = useState(false);
  const handelInput = (e) => {
    e.preventDefault();

    let id = 1;
    if (localStorage.getItem("quizs")) {
      id = localStorage.getItem("quizs").length + 1;
    }

    const data = {
      id: id,
      date: quiz.date,
      question: quiz.question,
      answer: quiz.answer,
      option:[
        {
            A:quiz.A,
            
        },
        {
            A:quiz.B
        },
        {
            A:quiz.C
        },
        {
            A:quiz.D
        },
      ]
    };
    // remove localStorage add api

    if (localStorage.getItem("quizs") == null) {
      localStorage.setItem("quizs", "[]");
    }
    var update = JSON.parse(localStorage.getItem("quizs"));
    update.push(data);
    localStorage.setItem("quizs", JSON.stringify(update));

    updateData();
  };

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

    var today = new Date();
    var y = today.toLocaleString("en-IN", { weekday: "long" });
    var d = today.toLocaleString("en-IN", { day: "2-digit" });
    var m = today.toLocaleString("en-IN", { month: "long" });
    var r = y + " " + d + " " + m;
    setDateValue(r);
  }, []);

  return (
    <>
      <div className="card">
        {dateValue}
        <br />
        <br />
        <div className="container">
          <label htmlFor="date">Create Question</label>
          <input
            type="date"
            id="date"
            name="date"
            required
            value={quiz.data}
            onLoad={(e) => {
              setQuiz({ ...quiz, date: e.target.value });
              console.log(e);
            }}
          />
          <div>
            <label htmlFor="question">Question</label>
            <input
              type="text"
              id="question"
              name="firstname"
              placeholder="Your Question.."
              value={quiz.question}
              onChange={(e) => {
                setQuiz({ ...quiz, question: e.target.value });
              }}
            />
            <div className="row">
            <div className="from_group">
            <label htmlFor="A">A</label>
            <input
              type="text"
              id="A"
              name="lastname"
              placeholder="Your Answer"
              value={quiz.A}
              onChange={(e) => {
                setQuiz({ ...quiz, A: e.target.value });
              }}
            />
            </div>
            <div className="from_group">
            <label htmlFor="B">B</label>
            <input
              type="text"
              id="B"
              name="lastname"
              placeholder="Your Answer"
              value={quiz.B}
              onChange={(e) => {
                setQuiz({ ...quiz, B: e.target.value });
              }}
            />
            </div>
            <div className="from_group">
            <label htmlFor="C">C</label>
            <input
              type="text"
              id="C"
              name="lastname"
              placeholder="Your Answer"
              value={quiz.C}
              onChange={(e) => {
                setQuiz({ ...quiz, C: e.target.value });
              }}
            />
            </div>
            <div className="from_group">
            <label htmlFor="D">D</label>
            <input
              type="text"
              id="D"
              name="lastname"
              placeholder="Your Answer"
              value={quiz.D}
              onChange={(e) => {
                setQuiz({ ...quiz, D: e.target.value });
              }}
            />
            </div>
            </div>
            <label htmlFor="answer">Answer</label>
            <input
              type="text"
              id="answer"
              name="lastname"
              placeholder="Your Answer"
              value={quiz.answer}
              onChange={(e) => {
                setQuiz({ ...quiz, answer: e.target.value });
              }}
            />
            <input type="submit" defaultValue="Submit" onClick={handelInput} />
          </div>
          {/*  */}
          <label htmlFor="">Create Question</label>
          {show?.map((e) => {
            return (
              <>
                <div className="smallCard">
                  <div
                    className="data"
                    onClick={() =>
                      e.id == e.id
                        ? showHide == false
                          ? setShowHide(true)
                          : setShowHide(false)
                        : null
                    }
                  >
                    {e.question}
                  </div>
                  {showHide ? <h1>{e.answer}</h1> : null}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
