import firebaseConfig from "../utils/firebase";
import { getDatabase, push, ref } from "firebase/database";
import { useNavigate } from "react-router-dom";
import { useUsername, useUpdateUsername } from './ContextUsername';
import { useScore, useResetScore } from './ContextScore';
import { useUpdateLocation } from './ContextLocation';

export default function Score() {
  const navigate = useNavigate();
  const username = useUsername();
  const updateUsername = useUpdateUsername();
  const score = useScore();
  const resetScore = useResetScore();
  const updateLocation = useUpdateLocation();

  function saveName(event) {
    event.preventDefault()
    const database = getDatabase(firebaseConfig)
    const dbRef = ref(database, `container`)
    push(dbRef, { Name: username, Score: score })
  }

  function handleClick(e) {
    saveName(e);
    updateLocation(null);
    updateUsername(null);
    resetScore();
    navigate('/highscores');
  }

  return (
    <button onClick={(e) => handleClick(e)}>Submit score and quit game</button>
  )
}
