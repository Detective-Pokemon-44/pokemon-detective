import { useState, useEffect } from "react"
import firebaseConfig from "../utils/firebase"
import { getDatabase, push, ref, onValue, remove } from "firebase/database"

export default function Scoreboard({ scoreData }) {
    console.log(scoreData);
  return (
  <>
  <ul>
    {scoreData.map((individual)=> {
        return (
          <li>
            <p>
              {individual.nameScore.Name} {individual.nameScore.Score} score
            </p>
          </li>
        )
    })}
  </ul>
  </>
  )
}
