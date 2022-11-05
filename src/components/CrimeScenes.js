import { useState } from 'react';

export default function CrimeScenes({ username, location }) {
    const [pokemon, setPokemon] = useState([]);

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
            <h2>Welcome to {location}, {username}</h2>
            <button onClick={randomPokemon}>Generate Pokemon</button>
        </div>
    )
}