import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function QuizOut() {
    const navigate = useNavigate();
    const Out=()=>{
        navigate("/user")
    }
  return (
    <>
        <h1>Out</h1>
        <button onClick={()=>Out()}>DashBoard</button>
    </>
  )
}
