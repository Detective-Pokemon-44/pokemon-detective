import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import firebaseConfig from "../utils/firebase";
import { getDatabase, ref, onValue } from "firebase/database";

export default function Scoreboard() {
  // export default function Scoreboard() {
  // Limit to 10 scores
  const [highScores, setHighScores] = useState([]);
  const database = getDatabase(firebaseConfig)
  const dbRef = ref(database, `container`)

  useEffect(() => {
    onValue(dbRef, (res) => {
      const data = res.val()
      let temp = [];
      for (const item in data) {
        temp.push(data[item]);
      }
      const filteredData = temp
      .sort((a, b) => b.Score - a.Score)
      .slice(0, 20) 
      setHighScores(filteredData);
    })
  }, [])

  return (
    <div className="main">
      <Link to="/"><button>Go Back</button></Link>
      <div className="Scoreboard">
        <h2>High Scores</h2>
        <ul>
          {highScores.map((highScore, i) => {
            return (
              <li key={i} className="Scoreboard-listItem">
                <span>{highScore.Name} : </span>
                <span>{highScore.Score}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

