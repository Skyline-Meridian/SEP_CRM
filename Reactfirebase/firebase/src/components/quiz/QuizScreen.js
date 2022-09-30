import React, { useState } from 'react'
import QuestionList from "./demo/questions.json";

import QuizResult from './QuizResult.js';
import Question from './Question.js';

export default function QuizScreen({retry}) {
    const [currentQuestionsIndex,setCurrentQuestionsIndex]=useState(0);
    const [markedAnswers,setMarkedAnswers]=useState(new Array(QuestionList.length));
    const isQuestionEnd=currentQuestionsIndex==QuestionList.length;
    const calculatrResult=()=>{
       
        let correct=0;
        QuestionList.forEach((question,index) => {
            if (question.currentQuestionsIndex==markedAnswers[index]) {
                correct++;
            }
        });
        return{
            total:QuestionList.length,
            correct:correct,
            percentage:Math.trunc((correct/QuestionList.length)*100)
        }
    }
  return (
    <>
    {JSON.stringify(markedAnswers)}
        <div>
            {
            isQuestionEnd?(
                <QuizResult
                    result={calculatrResult()}
                    retry={retry}
                />
            ):(
                <Question
                    question={QuestionList[currentQuestionsIndex]}
                    totalQuestions={QuestionList.length}
                    currentQuestion={currentQuestionsIndex+1}
                    setAnswer={(index)=>{
                        setMarkedAnswers((arr)=>{
                            let newArr=[...arr];
                            newArr[currentQuestionsIndex-1]=index;
                            return newArr;
                        });
                        setCurrentQuestionsIndex(currentQuestionsIndex+1);
                    }}
                />
            )    
            }
        </div>
    </>
  )
}