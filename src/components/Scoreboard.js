import { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import firebaseConfig from "../utils/firebase";
import { getDatabase, ref, onValue } from "firebase/database";
import { useEndScore } from "./ContextScore";
import { CSSTransition } from "react-transition-group";

export default function Scoreboard() {
  const nodeRef = useRef(null);
  // Limit to 10 scores
  const [highScores, setHighScores] = useState([]);
  const endScore = useEndScore();

  useEffect(() => {
    function retrieveHighscores() {
      const database = getDatabase(firebaseConfig);
      const dbRef = ref(database, "highscores");
      onValue(dbRef, (res) => {
        const data = res.val();
        setHighScores(data);
      })
    }

    retrieveHighscores();
  }, [])

  return (
    <CSSTransition
      in={true}
      appear={true}
      timeout={1000}
      classNames="Scoreboard"
      nodeRef={nodeRef}
      unmountOnExit
    >
      <div className="main" ref={nodeRef} >
        <div className="Scoreboard" >
          <h2 className="Score-title">Top Detectives</h2>
          <img className="crown" src={require('../assets/images/crown1.png')} alt="first place crown" />
          <div></div>
          <ul className="Score-list">
            {highScores.map((highScore, i) => {
              return (
                <li key={i} className="Scoreboard-listItem">
                  <div className="Score-index">
                    <span>{i + 1}</span>
                  </div>
                  <div className="Score-name">
                    <span className="Score-name-span">{highScore.Name}</span>
                  </div>
                  <div className="Score-score">
                    <span>{highScore.Score}</span>
                  </div>
                </li>
              )
            })}

            <h3 className="Your-score">Your score: {endScore}</h3>
            <Link to="/"><button className="Go-back">X</button></Link>
          </ul>
        </div>
      </div>
    </CSSTransition>
  )
}

