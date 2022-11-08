import { useState, useEffect } from 'react';
import axios from 'axios';
import { isNotUnique, randNum } from '../utils/functions';
import PokemonList from './PokemonList';
import gameLogic from "../utils/logic"

export default function CrimeScenes({ username, location }) {
  const [crimeSceneArray, setCrimeSceneArray] = useState();
  const [pokemonURL, setPokemonURL] = useState([]);
  const [pokemon, setPokemon] = useState([]);
  const [crimeSelected, setCrimeSelected] = useState(null);
  const [crimeSolved, setCrimeSolved] = useState(null);
 
  const handleCrimeClick = (crime) => {
    setCrimeSelected(crime);
    gameLogic(pokemon[0], crimeSelected, crimeSolved, setCrimeSolved)
    alert(`you selected ${crime.category}`)
  }
  // const handlePokemonClick = (pokemon) => {
  //   setPokemonSelected(pokemon);
  //   alert(`you selected ${pokemon.name}`);
  // }

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
          (!isNotUnique(crimeTypes, res.data[crime].category) && crimeTypes.push(res.data[crime].category));
        }
        console.log(crimeTypes);
        // creates an array of (up to) 5 random unique crimes depending on how many unique crimes in prev array
        while (randomCrimes.length < (crimeTypes.length >= 5 ? 5 : crimeTypes.length)) {
          let num = randNum(crimeTypes.length, 0);
          (!isNotUnique(randomCrimes, crimeTypes[num]) && randomCrimes.push(crimeTypes[num]));
        }
        // for each unique crime in prev array, will select a random crime of the same category from the original res data
        randomCrimes.forEach((crimeType) => {
          let crimePool = [];
          for (let crime in res.data) {
            (res.data[crime].category === crimeType && crimePool.push(res.data[crime]));
          }
          selectedCrimes.push(crimePool[randNum(crimePool.length, 0)])
        })
        // pushes 5 random unique crimes to state
        setCrimeSceneArray(selectedCrimes);
        randomPokemon();
      })
  }, [location])

  // this function creates an array of 5 unique pokemon
  function randomPokemon() {
    let tempArray = [];
    while (tempArray.length < 5) {
      let newNumber = randNum(151, 1);
      // when none of the existing array entries matches the random number push to array
      (!isNotUnique(tempArray, newNumber) && tempArray.push(`https://pokeapi.co/api/v2/pokemon/${newNumber}`))
    }
    setPokemonURL(tempArray);
  }

  // Function to convert the Pokemon URLs array into new array by making API call to access each URLs and get Pokemon Name and Type
  useEffect(() => {
    Promise.all(
      pokemonURL.map(async (pokemon) => {
        const res = await fetch(pokemon);
        const json = res.json();
        return json;
      })
    ).then((data) => {
      setPokemon(data);
    })
  }, [pokemonURL]);


  return (
    <div className="CrimeScenes card">
      <h2>
        Welcome to {location[0]}, {username}
      </h2>
      {crimeSceneArray && (
        <ul className="CrimeScenes-category">
          {crimeSceneArray.map((individual) => {
            return <li key={individual.id} onClick={() => { handleCrimeClick(individual) }}>{individual.category}</li>;
          })}
        </ul>
      )}

      {pokemon && <PokemonList pokemon={pokemon} />}
    </div>
  );
}
