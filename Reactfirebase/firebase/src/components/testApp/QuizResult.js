import React from 'react'
import { useNavigate } from 'react-router-dom';
import "../quiz/quiz.css"
export default function QuizResult() {
  const navigate = useNavigate();
  const Out=()=>{
    navigate("/user")
}
  return (
    <>
        <div className='result-screen'>
            {/* <h2>Result:{result.percentage}%</h2>
            <p>Selected {result.correct} correct options out of {result.total} questions</p> */}
            <img src='https://img.freepik.com/free-vector/card-template-with-fireworks-party-horns_1308-3021.jpg?w=2000'/>
            <button onClick={()=>Out()}>DashBoard</button>
        </div>
    </>
  )
}
