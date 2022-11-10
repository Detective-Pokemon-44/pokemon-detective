import { useState, useEffect } from "react"
import firebaseConfig from "../utils/firebase"
import { getDatabase, push, ref, onValue, remove } from "firebase/database"

export default function Scoreboard({ scoreData }) {
    console.log(scoreData);
    // export default function Scoreboard() {
    // Limit to 10 scores

    const database = getDatabase(firebaseConfig)
    
    const dbRef = ref(database, `container`)
    
    const temp = []
    onValue(dbRef, (res) => {
      const data = res.val()
    //   console.log(data);
    //   for (let key in data) {
    //       temp.push({ key: key, nameScore: data[key] })
    //     }

    const filteredData = temp.sort(
        (a, b) => b.nameScore.Score - a.nameScore.Score
    )

    })
  return (
    <>
      <ul>
        {/* {filteredData.map((individual) => {
          return (
            <li>
              <p>
                {individual.nameScore.Name} score{individual.nameScore.Score}
              </p>
            </li>
          )
        })} */}
      </ul>
    </>
  )
}


//   return (
//   <>
//   <ul>
//     {scoreData.map((individual)=> {
//         return (
//           <li>
//             <p>
//               {individual.nameScore.Name} {individual.nameScore.Score} score
//             </p>
//           </li>
//         )
//     })}
//   </ul>
//   </>
//   )
// }
