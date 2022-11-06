import { useState, useEffect } from 'react';
import axios from 'axios';

export default function CrimeScenes({ username, location }) {
    const [pokemon, setPokemon] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState();
    const [crimeSceneArray, setCrimeSceneArray] = useState();

    // this function filter the array with same category name with placeholder, and choose random object 
    function filter(array, placeholder){
        const filteredArray = array.filter(({category}) => category === placeholder)
        return filteredArray[Math.floor(Math.random() * filteredArray.length)]
    }

    useEffect(() => {
        axios
            .get(`https://data.police.uk/api/crimes-street/all-crime`, {
            params: {
                lat: location[1],
                lng: location[2],
            },
            })
            .then(function (res) {

                // show one random object from crime-category parameter
                setCrimeSceneArray([
                filter(res.data, "bicycle-theft"),
                filter(res.data, "criminal-damage-arson"),
                filter(res.data, "violent-crime")
                ])
            })
    },[location])

    // this function creates an array of 5 unique pokemon
    function randomPokemon() {
        let tempArray = [];
        while (tempArray.length < 5) {
            let newNumber = Math.floor(Math.random() * 151 + 1);
            function isNotUnique(element) {
                return element === newNumber;
            }
            // when none of the existing array entries matches the random number push to array
            (!tempArray.some(isNotUnique) && tempArray.push(newNumber))
        }
        setPokemon(tempArray);
    }

    return (
      <div className='CrimeScenes card'>
        <h2>
          Welcome to {location[0]}, {username}
        </h2>
        {crimeSceneArray && (
          <ul className='CrimeScenes-category'>
            {crimeSceneArray.map((individual) => {
              return <li key={individual.id}>{individual.category}</li>
            })}
          </ul>
        )}
        <button onClick={randomPokemon}>Generate Pokemon</button>
      </div>
    )
}