import { useState, useEffect } from 'react';
import axios from 'axios';
import {isNotUnique, randNum} from '../utils/functions';

export default function CrimeScenes({ username, location }) {
    const [selectedLocation, setSelectedLocation] = useState();
    const [crimeSceneArray, setCrimeSceneArray] = useState();
    const [pokemonURL, setPokemonURL] = useState([]);
    const [pokemon, setPokemon] = useState([]);

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
                let crimeTypes = [];
                let randomCrimes = [];
                let selectedCrimes = [];
                // goes through res data to ID all unique crimes and push to array
                for (let crime in res.data) {
                    (!isNotUnique(crimeTypes, res.data[crime].category) && crimeTypes.push(res.data[crime].category))
                }

                // creates an array of (up to) 5 random unique crimes depending on how many unique crimes in prev array
                while(randomCrimes.length < (crimeTypes.length >= 5 ? 5 : crimeTypes.length)) {
                    let num = randNum(crimeTypes.length, 0);
                    (!isNotUnique(randomCrimes, crimeTypes[num]) && randomCrimes.push(crimeTypes[num]))
                }

                // for each unique crime in prev array, will select a random crime of the same category from the original res data
                randomCrimes.forEach((crimeType) => {
                    let crimePool = [];
                    for (let crime in res.data) {
                        if (res.data[crime].category === crimeType) {
                            crimePool.push(res.data[crime]);
                        }
                    }
                    selectedCrimes.push(crimePool[randNum(crimePool.length, 0)])
                })
                console.log(selectedCrimes);
                // pushes 5 random unique crimes to state
                setCrimeSceneArray(selectedCrimes);
            })
        },[location])

    // this function creates an array of 5 unique pokemon
    function randomPokemon() {
        let tempArray = [];
        while (tempArray.length < 5) {
            let newNumber = randNum(151, 1);
            // when none of the existing array entries matches the random number push to array
            (!isNotUnique(tempArray, newNumber) && tempArray.push(`https://pokeapi.co/api/v2/pokemon/${newNumber}`))
        }
        setPokemonURL(tempArray)
    }

    // Function to convert the Pokemon URLs array into new array by making API call to access each URLs and get Pokemon Name and Type
    useEffect(() => {
        Promise.all(pokemonURL.map(async pokemon => {
            const res = await fetch(pokemon);
            const json = res.json();
            return json;
        })).then((data => {
            setPokemon(data);
            console.log(data)
        }))
    }, [pokemonURL])

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