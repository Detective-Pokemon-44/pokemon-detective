import { useState, useEffect } from 'react';
import axios from 'axios';

export default function CrimeScenes({ username, location }) {
    const [pokemon, setPokemon] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState()
    console.log(location);
    useEffect(() => {
        axios
          // .get(`https://pokeapi.co/api/v2/pokemon`, {
          .get(`https://data.police.uk/api/crimes-street/all-crime`, {
            params: {
              lat: location[1],
              lng: location[2],
            },
          })
          .then(function (res) {
            const filtered = res.data
            console.log(filtered)
          })
    },[])

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
        <div className="CrimeScenes card">
            <h2>Welcome to {location[0]}, {username}</h2>
            <button onClick={randomPokemon}>Generate Pokemon</button>
        </div>
    )
}