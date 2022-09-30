import React, { useEffect, useState } from 'react'
import Navbar from "./Navbar";
import Authentication from "../services/auth.services";
import UserAnswerMapService from "../services/userAnswerMap.services";
import { async } from '@firebase/util';

export default function UserHistory() {
  const [show, setShow] = useState([]);

  const getuserHistory=async()=>{
    const UserId = await Authentication.exitsUser();
    console.log(UserId?.id);
    const data=await UserAnswerMapService.getUserAnswerMap("userId",UserId?.id);
    console.log(data);
    setShow(data?.docs?.map((doc) => ({ ...doc.data(), id: doc.id })));
  }
  useEffect(() => {
    getuserHistory();
  }, [])
  let id=1;
  return (
    <>
      <Navbar/>
      <div className="card">
      <button onClick={()=>getuserHistory()}>refesh</button>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>Date</th>
              <th>Quiz Name</th>
              <th>Submit</th>
              <th>Result</th>
            </tr>
          </thead>
          <thead>
            {show?.map((e) => {
              console.log(e)
              return (
                <>
                  <tr>
                    <td>{id++}</td>
                    <td>{e?.userId}</td>
                    <td>{e?.quizQuestionName}</td>
                    {e?.IsSubmit==true?
                      <td>Submit</td>
                    :
                    <td>No submit</td>
                    }
                    {e?.IscurrectAnswer==true?
                      <td>true</td>
                    :
                    <td>false</td>
                    }
                   
                  </tr>
                </>
              );
            })}
          </thead>
        </table>
      </div>
    </>
  )
}
