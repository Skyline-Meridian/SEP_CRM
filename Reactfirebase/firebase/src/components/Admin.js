import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import QuizsDataService from "../services/quiz.services";
import ConfigService from "../services/config.services";
import "./styles/admin.css";
import { async } from "@firebase/util";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const [quiz, setQuiz] = useState({
    date: "",
    startTime: "",
    endTime: "",
    quizQuestionName: "",
    answer: "",
    questions: [],
    questionsTime: [],
  });
  const [dateValue, setDateValue] = useState("");
  const [currentItem, setCurrentItem] = useState("");
  const [count, setCount] = useState(1);
  const navigate = useNavigate();

  const handelInput = async (e) => {
    e.preventDefault();

    if (quiz.questions.length == 15) {
      const data = {
        date: quiz.date,
        quizQuestionName: quiz.quizQuestionName,
        questions: quiz.questions,
      };

      console.log(data);
      // // api call
      const quizTable = await QuizsDataService.addQuizs(data);
      console.log(quizTable);
      const time = {
        startTime: quiz.startTime,
        questionsTime: quiz.questionsTime,
      };
      console.log(time);

      const configTable = await ConfigService.addConfig(time);
      console.log(configTable);
      if (quizTable?.id != null) {
        navigate("/adminHistory");
        alert("quiz data add");
      }
    } else {
      alert("plase enter the data");
    }
  };

  useEffect(() => {
    var today = new Date();
    var y = today.toLocaleString("en-IN", { weekday: "long" });
    var d = today.toLocaleString("en-IN", { day: "2-digit" });
    var m = today.toLocaleString("en-IN", { month: "long" });
    var r = y + " " + d + " " + m;
    setDateValue(r);
  }, []);

  // add

  const pushItem = () => {
    console.log(currentItem.answer);
    if (currentItem) {
      const data = {
        questionNumber: count,
        question: currentItem.question,
        A: currentItem.A,
        B: currentItem.B,
        C: currentItem.C,
        D: currentItem.D,
        answer: currentItem.answer,
      };

      const time = {
        questionNumber: count,
        time: currentItem.time,
      };
      console.log(time);
      if (quiz.questions.length == 15 && quiz.questionsTime.length == 15) {
        alert("all 15 question added");
      } else {
        quiz.questions.push(data);

        quiz.questionsTime.push(time);
        setCurrentItem(data);
      }
    } else {
      alert("all not add question added");
    }
  };

  const removeItem = (_item) => {
    const updatedItemList = [];
    const updatedI = [];
    quiz.questions.map((item, key) => {
      if (key !== _item) {
        updatedItemList.push(item);
      }
    });
    quiz.questionsTime.map((item, key) => {
      console.log(_item);
      if (key !== _item) {
        updatedI.push(item);
      }
    });
    setQuiz(
      { ...quiz, questions: updatedItemList },
      { ...quiz, questionsTime: updatedI }
    );
  };

  const update = (value, item, keyValue) => {
    console.log(keyValue);
    let items = quiz.questions;

    const data = {
      questionNumber: parseInt(value),
      question: item.question,
      A: item.A,
      B: item.B,
      C: item.C,
      D: item.D,
      answer: item.answer,
    };

    console.log(data);

    let replacedItem = items.splice(items.indexOf(item), 1, data);

    console.log(replacedItem); //['RUBY']
    console.log(items); //['JS', 'PHP', 'PYTHON']
    setQuiz({ ...quiz, questions: items });
  };
  let id = 1;
  return (
    <>
      <Navbar />
      <div className="card">
        {dateValue}
        <br />
        <br />
        <form>
          <div className="container">
            <label htmlFor="quizQuestionName">Quiz Question Name</label>
            <input
              type="text"
              id="quizQuestionName"
              name="quizQuestionName"
              required
              placeholder="quiz Question Name"
              value={quiz.quizQuestionName}
              onChange={(e) => {
                setQuiz({ ...quiz, quizQuestionName: e.target.value });
                console.log(e);
              }}
            />
            <label htmlFor="date">Create Question</label>
            <input
              type="date"
              id="date"
              name="date"
              required
              value={quiz.data}
              onChange={(e) => {
                setQuiz({ ...quiz, date: e.target.value });
                console.log(e);
              }}
            />
            <label htmlFor="startTime">Start Time</label>
            <input
              type="time"
              id="startTime"
              name="startTime"
              required
              value={quiz.startTime}
              onChange={(e) => {
                setQuiz({ ...quiz, startTime: e.target.value });
                console.log(e);
              }}
            />
            {/* <label htmlFor="endTime">End Time</label>
            <input
              type="time"
              id="endTime"
              name="endTime"
              required
              value={quiz.endTime}
              onChange={(e) => {
                setQuiz({ ...quiz, endTime: e.target.value });
                console.log(e);
              }}
            /> */}
            {/* Question */}
            <div>
              <label htmlFor="question">Question</label>
              <input
                type="text"
                id="question"
                name="firstname"
                placeholder="Your Question.."
                value={currentItem.question}
                onChange={(e) => {
                  setCurrentItem({ ...currentItem, question: e.target.value });
                }}
              />
              {/* opstion */}
              <div className="row">
                <div className="from_group">
                  <input
                    type="radio"
                    id="A"
                    name="fav_language"
                    value="A"
                    onChange={(e) => {
                      setCurrentItem({
                        ...currentItem,
                        answer: e.target.value,
                      });
                    }}
                  />
                  <label htmlFor="A">A</label>
                  <input
                    type="text"
                    id="A"
                    name="lastname"
                    placeholder="Your Answer"
                    value={currentItem.A}
                    onChange={(e) => {
                      setCurrentItem({ ...currentItem, A: e.target.value });
                    }}
                  />
                </div>
                <div className="from_group">
                  <input
                    type="radio"
                    id="B"
                    name="fav_language"
                    value="B"
                    onChange={(e) => {
                      setCurrentItem({
                        ...currentItem,
                        answer: e.target.value,
                      });
                    }}
                  />
                  <label htmlFor="B">B</label>
                  <input
                    type="text"
                    id="B"
                    name="lastname"
                    placeholder="Your Answer"
                    value={currentItem.B}
                    onChange={(e) => {
                      setCurrentItem({ ...currentItem, B: e.target.value });
                    }}
                  />
                </div>
                <div className="from_group">
                  <input
                    type="radio"
                    id="C"
                    name="fav_language"
                    value="C"
                    onChange={(e) => {
                      setCurrentItem({
                        ...currentItem,
                        answer: e.target.value,
                      });
                    }}
                  />
                  <label htmlFor="C">C</label>
                  <input
                    type="text"
                    id="C"
                    name="lastname"
                    placeholder="Your Answer"
                    value={currentItem.C}
                    onChange={(e) => {
                      setCurrentItem({ ...currentItem, C: e.target.value });
                    }}
                  />
                </div>
                <div className="from_group">
                  <input
                    type="radio"
                    id="D"
                    name="fav_language"
                    value="D"
                    onChange={(e) => {
                      setCurrentItem({
                        ...currentItem,
                        answer: e.target.value,
                      });
                    }}
                  />
                  <label htmlFor="D">D</label>
                  <input
                    type="text"
                    id="D"
                    name="lastname"
                    placeholder="Your Answer"
                    value={currentItem.D}
                    onChange={(e) => {
                      setCurrentItem({ ...currentItem, D: e.target.value });
                    }}
                  />
                </div>
              </div>
              <label htmlFor="time">Time Set Per Question</label>
              <input
                type="time"
                id="time"
                name="lastname"
                value={currentItem.time}
                onChange={(e) => {
                  setCurrentItem({ ...currentItem, time: e.target.value });
                }}
              />
              <input
                type="submit"
                defaultValue="Submit"
                onClick={handelInput}
              />
            </div>
            {/* show data */}
            <label htmlFor="">Create Question</label>
            {currentItem.time == undefined ||
            currentItem.time == "" ||
            currentItem.answer == undefined ? (
              <p
                className="add_btn"
                onClick={() => {
                  alert("fill all question");
                }}
              >
                Add
              </p>
            ) : (
              <p
                className="add_btn"
                onClick={() => {
                  pushItem();
                  setCount(count + 1);
                  setCurrentItem({
                    ...currentItem,
                    time: "",
                    questionNumber: "",
                    question: "",
                    A: "",
                    B: "",
                    C: "",
                    D: "",
                    // answer: "",
                  });
                }}
              >
                Add
              </p>
            )}

            <div className="">
              {quiz.questions.map((item, key) => {
                return (
                  <>
                    <div className="group" key={key}>
                      <h5>{item.questionNumber}</h5>
                      {quiz.questionsTime.map((item, ke) => {
                        return ke == key ? <p>Time:{item.time}</p> : null;
                      })}
                      <label htmlFor="question" id="label">
                        {item?.question}
                      </label>
                      <div className="row">
                        <p>{item.A}</p>
                        <p>{item.B}</p>
                        <p>{item.C}</p>
                        <p>{item.D}</p>
                      </div>
                      <p>{item.answer}</p>
                      <p
                        className="remove_icon"
                        onClick={() => {
                          removeItem(key);
                          setCount(count - 1);
                        }}
                      >
                        remove
                      </p>
                      <select
                        onChange={(w) => {
                          update(w.target.value, item, key);
                        }}
                      >
                        <option value={item.questionNumber} selected>
                          {item.questionNumber}
                        </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                      </select>
                      {/* <button type="button" value={item} onClick={removeItem}><AiOutlineClose/></button> */}
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
