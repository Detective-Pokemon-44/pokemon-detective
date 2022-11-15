import firebaseConfig from "../utils/firebase";
import { getDatabase, push, ref } from "firebase/database";
import { useNavigate } from "react-router-dom";
import { useUsername } from './ContextUsername';
import { useScore } from './ContextScore';

export default function Score() {
  const navigate = useNavigate();
  const username = useUsername();
  const score = useScore();

  function saveName(event) {
    event.preventDefault()
    const database = getDatabase(firebaseConfig)
    const dbRef = ref(database, `container`)
    push(dbRef, { Name: username, Score: score })
  }

  return (
    <button onClick={(e) => {
      saveName(e);
      navigate('/highscores')
    }}>Submit score and quit game</button>
  )
}
