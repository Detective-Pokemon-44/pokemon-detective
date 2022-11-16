import firebaseConfig from "../utils/firebase";
import { get, getDatabase, child, ref, set } from "firebase/database";
import { useNavigate } from "react-router-dom";
import { useUsername, useUpdateUsername } from './ContextUsername';
import { useScore, useResetScore, useEndScoreUpdate } from './ContextScore';
import { useUpdateLocation } from './ContextLocation';

export default function Score() {
  const navigate = useNavigate();
  const username = useUsername();
  const updateUsername = useUpdateUsername();
  const score = useScore();
  const resetScore = useResetScore();
  const updateLocation = useUpdateLocation();
  const updateEndScore = useEndScoreUpdate();

  function saveName(event) {
    event.preventDefault()
    const dbRef = ref(getDatabase(firebaseConfig));

    // gets high score array from db, pushes if score is > lowest, sorts, then rewrites to db
    get(child(dbRef, "highscores")).then((res) => {
      const data = res.val();
      if (data.length < 10) {
        data.push({ name: username, score: score });
        const highscores = data.sort((a, b) => b.score - a.score);
        set((child(dbRef, "highscores")), highscores)
      } else {
        if (score > data[9].score) {
          data.push({ name: username, score: score });
          const highscores = data.sort((a, b) => b.score - a.score).slice(0, 10);
          set((child(dbRef, "highscores")), highscores);
        }
      }
    })
  }

  function handleClick(e) {
    // only adds score if greater than 0
    (score > 0 && saveName(e));
    updateLocation(null);
    updateUsername(null);
    updateEndScore(score);
    resetScore();
    navigate('/highscores');
  }

  return (
    <button className="Go-back-button2" onClick={(e) => handleClick(e)} >Quit game</button>
  )
}