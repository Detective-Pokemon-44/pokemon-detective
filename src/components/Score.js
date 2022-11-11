import firebaseConfig from "../utils/firebase"
import { getDatabase, push, ref, onValue, remove } from "firebase/database"
import { Route, Routes, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import Scoreboard from "./Scoreboard"

export default function Score({ username, score }) {

  const navigate = useNavigate();

  const [scoreData, setScoreData] = useState([])
  function saveName(event) {
    event.preventDefault()
    const database = getDatabase(firebaseConfig)
    const dbRef = ref(database, `container`)
    push(dbRef, {Name: username, Score: score})
  }

  useEffect(() => {
    const database = getDatabase(firebaseConfig)
    const dbRef = ref(database, `container`)
    onValue(dbRef, (res) => {
      const temp = [];
      const data = res.val()
      for(let key in data){
        temp.push({key: key, nameScore: data[key]})
      }
      setScoreData(temp)
    })
  }, [])

  return (
    <>
      <div className='score-container'>
        {/* Button will save user's name and score to firebase to display into High Score page, and quit the game */}
        <button onClick={(e) => {
          saveName(e);
          navigate('/highscores')
        }}>Submit score and quite game</button>
        <p>{username}, {score}</p>
      </div>
    </>
  )
}
