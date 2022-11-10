import firebaseConfig from "../utils/firebase"
import { getDatabase, push, ref, onValue, remove } from "firebase/database"
import { Route, Routes } from "react-router-dom"
import { useState, useEffect } from "react"
import Scoreboard from "./Scoreboard"

export default function Score({ username, score }) {
  console.log(username)
  const [scoreData, setScoreData] = useState([])
  function saveName(event) {
    event.preventDefault()
    const database = getDatabase(firebaseConfig)
    const dbRef = ref(database, `container`)
    push(dbRef, {Name: username, Score: score})
    console.log(dbRef);
  }
  useEffect(() => {
    const database = getDatabase(firebaseConfig)

    const dbRef = ref(database, `container`)

    onValue(dbRef, (res) => {
      
      const temp = [];
      console.log(res.val())
      const data = res.val()
      for(let key in data){
        console.log(key, data[key]);
        temp.push({key: key, nameScore: data[key]})
      }
      setScoreData(temp)
      console.log(scoreData);
    })
  }, [])

  return (
    <>
      <div className='score-container'>
        <button onClick={saveName}>Click Button to save the Name</button>
        <p>
          {username}, {score}
        </p>
        <ul>
          {/* {score.map((individualScore) => {
                    return (
                        <li>
                            <p>userName</p>
                            <p>{individualScore}</p>
                        </li>
                    )
                })} */}
        </ul>
      </div>
      <Routes>
        <Route
          path='/scoreboard'
          element={<Scoreboard scoreData={scoreData} />}
        />
      </Routes>
    </>
  )
}

// PSEUDO-CODE

// When user input their name on the landing page, firebase will store that information to display in the score Component(FINISHED)

// When the user clicks crime types, and if they succeed, setScore will be +1 from prev score, and update it in firebase. (FINISHED)

// When the user clicks the quit button, we will push the score data into firebase and display on the score Component with name(FINISHED)

// Display the score (FINISHED)

// Create new component Scoreboard to display username and userscore

// show scoreboard in landing page

// filter the object based on the score

// Access the object with specific key value

// Once we click the quit button, make useState value to be empty(we can do it tomorrow)