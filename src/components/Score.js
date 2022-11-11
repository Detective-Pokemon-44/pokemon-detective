import firebaseConfig from "../utils/firebase"
import { getDatabase, push, ref} from "firebase/database"
import { useNavigate } from "react-router-dom"

export default function Score({ username, score }) {
  const navigate = useNavigate();

  function saveName(event) {
    event.preventDefault()
    const database = getDatabase(firebaseConfig)
    const dbRef = ref(database, `container`)
    push(dbRef, {Name: username, Score: score})
  }

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
