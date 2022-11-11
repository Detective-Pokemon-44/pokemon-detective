import { useState, useEffect } from 'react';
import { isNotUnique, randNum } from '../utils/functions';
import PokemonList from './PokemonList';
import CrimeSceneModal from "./CrimeSceneModal";
import useToggleState from '../hooks/useToggleState';
import ReactModal from 'react-modal';
import Score from "./Score"
// import crimeObject from "../utils/crimeObject"

import crimeAPICall from '../utils/crimeAPICall';

export default function CrimeScenes({ username, location, handleLocation }) {
    const [crimeSceneArray, setCrimeSceneArray] = useState();
    const [pokemonURL, setPokemonURL] = useState([]);
    const [pokemon, setPokemon] = useState([]);
    const [crimeSelected, setCrimeSelected] = useState(null);
    const [modalState, toggleModal] = useToggleState();
    const [score, setScore] = useState(0);

    const handleCrimeClick = (crime) => {
        setCrimeSelected(crime);
        toggleModal(true);
    }

    const setTheCrime = (crime) => {
        setCrimeSceneArray(crime);
    }

    // this function creates an array of 5 unique pokemon
    function randomPokemon() {
        let tempArray = [];
        while (tempArray.length < 5) {
            let newNumber = randNum(151, 1);
            // when none of the existing array entries matches the random number push to array
            (!isNotUnique(tempArray, `https://pokeapi.co/api/v2/pokemon/${newNumber}`) && tempArray.push(`https://pokeapi.co/api/v2/pokemon/${newNumber}`))
        }
        setPokemonURL(tempArray);
    }

    // on component load, initializes crime and pokemon array values
    useEffect(() => {
        crimeAPICall(location, setTheCrime);
        randomPokemon();
    }, [location])


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
      <>
        <div className='CrimeScenes card'>
          <h2>
            Welcome to {location[0]}, {username}
          </h2>
          {crimeSceneArray && (
            <ul className='CrimeScenes-category'>
              {crimeSceneArray &&
                crimeSceneArray.map((individual) => {
                  return (
                    <li
                      key={individual.id}
                      onClick={(e) => {
                        handleCrimeClick(individual)
                      }}
                    >
                      {individual.category}
                    </li>
                  )
                })}
            </ul>
          )}

            {pokemon && <PokemonList pokemon={pokemon} />}

            {pokemon && (
                <ReactModal
                    isOpen={modalState}
                    className='Pokemon-modal'
                    onRequestClose={toggleModal}
                    appElement={document.getElementById("root")}
                >
                    <CrimeSceneModal pokemon={pokemon} crimeSelected={crimeSelected} handleLocation={handleLocation} username={username} score={score} setScore={setScore} />
                </ReactModal>
            )}
        </div>
        <Score username={username} score={score} />
      </>
    )
}
