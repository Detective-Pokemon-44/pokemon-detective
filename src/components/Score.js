import firebaseConfig from "../utils/firebase";
import { getDatabase, onValue, ref, set } from "firebase/database";
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
    const database = getDatabase(firebaseConfig);
    const dbRef = ref(database, 'highscores');
    let data;
    onValue(dbRef, (res) => {
      data = res.val();
    })
    if (data.length < 10) {
      data.push({ name: username, score: score });
      const highscores = data.sort((a, b) => b.score - a.score);
      set(dbRef, highscores)
    } else {
      if (score > data[9].score) {
        data.push({name: username, score: score});
        const highscores = data.sort((a, b) => b.score - a.score).slice(0, 10);
        set(dbRef, highscores);
      }
    }
  }

  function handleClick(e) {
    saveName(e);
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
