import React, { useState } from "react";
import QuizScreen from "./QuizScreen.js";
import JoinScreen from "./JoinScreen.js";
// import "./quiz.css"
export default function MainApp() {
  const [isQuizStarted, setIsQuizStarted] = useState(false);

  // 

  return (
    <>
      {/* {time} */}
      <div className="quiz-container">
        {isQuizStarted ? (
          <QuizScreen retry={() => setIsQuizStarted(false)} />
        ) : (
          <JoinScreen start={() => {setIsQuizStarted(true)}} />
        )}
      </div>
    </>
  );
}
