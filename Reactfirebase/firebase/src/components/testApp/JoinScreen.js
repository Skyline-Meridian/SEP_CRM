import React from "react";
import "../quiz/quiz.css"
export default function JoinScreen({ start }) {
  return (
    <>
      <div className="join-screen">
        <h1>Join Quiz</h1>
        <p>lorem</p>
        <button onClick={start}>start</button>
      </div>
    </>
  );
}
