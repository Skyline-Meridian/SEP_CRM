import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//  online data 
// get user data 
import Authentication from "../../services/auth.services";
// add data base user answer
import UserAnswerMapService from "../../services/userAnswerMap.services";

export default function QuizScreen({ todayQuiz, todayConfig,time,date }) {
  const [selected, setSelectedOption] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  //   total Questions
  const totalQuestions = todayQuiz?.map((q) => {
    return q?.questions?.length;
  });

  //   redirect page
  const navigate = useNavigate();

  //   add in data Base
  const selectHendler = async (e) => {
    // alert(JSON.stringify(e))
    const UserId = await Authentication.exitsUser();
    const eventName = UserId?.id + e?.quizQuestionName + e?.date;
    // alert(`question number ${e?.questionNumber} submit`);
    if (e?.userAnswer == e?.currectAnswer) {
      // add data base
      const firstTimeData = {
        quizId: e?.quizId,
        userId: UserId?.id,
        date:date,
        userMap: [
          {
            questionNumber: e?.questionNumber,
            userAnswer: e?.userAnswer,
            currectAnswer: e?.currectAnswer,
            IscurrectAnswer: true,
            time:time
          },
        ],
      };

      //   create a row for add data in userAnswerMap table

      const dataValue = await UserAnswerMapService.allRedayExitDoc(
        eventName,
        firstTimeData
      );

      if (dataValue == "create") {
        alert(currentQuestion+"question add data");
      }

      // stop currentQuestion
      if (totalQuestions == currentQuestion) {
        setSelectedOption(null);
      } else {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      }

      if (dataValue == "update") {
        alert(currentQuestion+"question add data in database");
        const secondTimeData = {
          questionNumber: e?.questionNumber,
          userAnswer: e?.userAnswer,
          currectAnswer: e?.currectAnswer,
          IscurrectAnswer: true,
          time:time
        };

        const dataValueSecond =
          await UserAnswerMapService.updateUserAnswerMapService(
            eventName,
            secondTimeData
          );
        console.log(dataValueSecond);
      }

      console.log(dataValue);

      //

      // alert("next")
      if (totalQuestions == currentQuestion) {
        navigate("/result")
        alert("go to cong");
      }
    } else {
      // add database for failde

      const firstTimeData = {
        quizId: e?.quizId,
        userId: UserId?.id,
        date:date,
        userMap: [
          {
            questionNumber: e?.questionNumber,
            userAnswer: e?.userAnswer,
            currectAnswer: e?.currectAnswer,
            IscurrectAnswer: false,
            time:time
          },
        ],
      };

      //   create a row for add data in userAnswerMap table

      const dataValue = await UserAnswerMapService.allRedayExitDoc(
        eventName,
        firstTimeData
      );

      console.log(dataValue);
      // redirect for faide page
      navigate("/Out")

      alert("falide");
    }
  };
  return (
    <>
      {selected}
      <div className="question">
        {/* <div className="progress-bar" ref={progressBar}></div> */}
        <div className="question-count">
          <b>{currentQuestion}</b>
          of
          <b>{totalQuestions}</b>
        </div>
        {todayQuiz?.map((e) => {
          return (
            <>
              {e?.questions?.map((q, index) => {
                return index + 1 == currentQuestion ? (
                  <div className="main">
                    <div className="title">
                      <span>Question:</span>
                      <p>{q?.question}</p>
                    </div>
                    <div className="options">
                      <div
                        className={
                          q?.A == selected ? "option active" : "option"
                        }
                        onClick={() => {
                          setSelectedOption(q?.A);
                          const data = {
                            questionNumber: index + 1,
                            userAnswer: "A",
                            currectAnswer: q?.answer,
                            quizId: e?.id,
                            quizQuestionName: e?.quizQuestionName,
                            date: e?.date,
                          };
                          selectHendler(data);
                        }}
                      >
                        {q?.A}
                      </div>
                      <div
                        className={
                          q?.B == selected ? "option active" : "option"
                        }
                        onClick={() => {
                          setSelectedOption(q?.B);
                          const data = {
                            questionNumber: index + 1,
                            userAnswer: "B",
                            currectAnswer: q?.answer,
                            quizId: e?.id,
                            quizQuestionName: e?.quizQuestionName,
                            date: e?.date,
                          };
                          selectHendler(data);
                        }}
                      >
                        {q?.B}
                      </div>
                      <div
                        className={
                          q?.C == selected ? "option active" : "option"
                        }
                        onClick={() => {
                          setSelectedOption(q?.C);
                          const data = {
                            questionNumber: index + 1,
                            userAnswer: "C",
                            currectAnswer: q?.answer,
                            quizId: e?.id,
                            quizQuestionName: e?.quizQuestionName,
                            date: e?.date,
                          };
                          selectHendler(data);
                        }}
                      >
                        {q?.C}
                      </div>
                      <div
                        className={
                          q?.D == selected ? "option active" : "option"
                        }
                        onClick={() => {
                          setSelectedOption(q?.D);
                          const data = {
                            questionNumber: index + 1,
                            userAnswer: "D",
                            currectAnswer: q?.answer,
                            quizId: e?.id,
                            quizQuestionName: e?.quizQuestionName,
                            date: e?.date,
                          };
                          selectHendler(data);
                        }}
                      >
                        {q?.D}
                      </div>
                    </div>
                  </div>
                ) : null;
              })}
            </>
          );
        })}

        {/* <div className="control">
          <button >Next</button>
        </div> */}
      </div>
    </>
  );
}
