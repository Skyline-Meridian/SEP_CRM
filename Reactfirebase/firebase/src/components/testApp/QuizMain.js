import React, { useEffect, useState } from "react";
import JoinScreen from "./JoinScreen";
import QuizScreen from "./QuizScreen";
// online data get
import QuizsDataService from "../../services/quiz.services";
import ConfigService from "../../services/config.services";
import UserAnswerMapService from "../../services/userAnswerMap.services";
import Authentication from "../../services/auth.services";



export default function QuizMain() {
  const [isQuizStarted, setIsQuizStarted] = useState(false);
//   const [isQuizStarted, setIsQuizStarted] = useState(true);
  const [quiz, setQuiz] = useState([]);
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [config, setConfig] = useState([]);
  const [find, setFind] = useState(null);

  // current date
  useEffect(() => {
    var today = new Date();
    var y = today.toLocaleString("en-IN", { year: "numeric" });
    var d = today.toLocaleString("en-IN", { day: "2-digit" });
    var m = today.toLocaleString("en-IN", { month: "2-digit" });
    var r = y + "-" + m + "-" + d;
    // console.log(r);
    setCurrentDate(r);
  }, []);

  // find today quiz data
  const findQuizData = async () => {
    const data = await QuizsDataService.findQuizData("date", currentDate);
    console.log(data?.docs?.map((doc) => ({ ...doc.data() , id: doc.id})));
    setQuiz(data?.docs?.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  
  useEffect(() => {
    findQuizData();
  }, []);

  //   find today current time
  useEffect(() => {
    const checkTime = (i) => {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    };

    const startTime = () => {
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      var s = today.getSeconds();
      // add a zero in front of numbers<10
      m = checkTime(m);
      s = checkTime(s);

      setCurrentTime(h + ":" + m+":"+ s);
      setTimeout(function () {
        startTime();
      }, 500);
    };
    startTime();
  }, []);

//   find today start time
useEffect(()=>{
const findTime=async ()=>{
    const data = await ConfigService.getAllConfig();
    // console.log(data?.docs?.map((doc) => ({ ...doc.data() })));
    setConfig(data?.docs?.map((doc) => ({ ...doc.data(), id: doc.id })));
}
findTime();
},[])


// find user question answer done
useEffect(()=>{
const find= async()=>{
    const UserId = await Authentication.exitsUser();
    console.log(UserId);

    const ExitFind = await UserAnswerMapService.multipleConditional(
        "userId",
        UserId?.id,
        "date",
        currentDate
      );

      console.log(ExitFind?.empty);
      console.log(ExitFind);
      setFind(ExitFind?.empty);

}
find();
},[])

  return (
    <div className="quiz-container">
    {currentTime}
    <br/>
    {quiz?.length}
      {isQuizStarted ? (
        <QuizScreen retry={() => setIsQuizStarted(false)} 
            todayQuiz={quiz}
            todayConfig={config}
            time={currentTime}
            date={currentDate}
        />
      ) : (
        <JoinScreen
          start={() => {
            find==false ?
            alert("alreday")
            :
            config?.map((t)=>{
                return t?.startTime <=currentTime ?
                quiz?.length == 1 
              ? setIsQuizStarted(true)
              : alert("next match comming soon")
                :
                alert(`starting time ${t?.startTime} `)
            })

              
             
          }}
        />
      )}
    </div>
  );
}
