import { useState, useEffect, useCallback } from "react";

import crimeObject from "../utils/crimeObject";
// import gameLogic from "../utils/logic";
import closeButton from "../assets/images/rectangle-xmark-solid.svg";

import { useScore, useUpdateScore } from './ContextScore';
import { useUsername } from './ContextUsername';
import { useUpdateLocation } from './ContextLocation';

import Score from "./Score";

export default function CrimeSceneModal({ pokemon, crimeSelected, toggleModal }) {
  const [pokemonSelectionID, setPokemonSelectionID] = useState(null);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [crimeSolved, setCrimeSolved] = useState(null);
  const score = useScore();
  const updateScore = useUpdateScore();
  const username = useUsername();
  const updateLocation = useUpdateLocation();

  const handleButtonSwitch = (e) => {
    setPokemonSelectionID(parseInt(e.target.value));
  };

  const handleFormSubmit = (e, pokemonId) => {
    e.preventDefault();
    if (pokemonId) {
      const pokemonFoundById = pokemon.find(
        (pokemon) => pokemon.id === pokemonId
      );
      setSelectedPokemon(pokemonFoundById);
    } else {
      alert("PICK SOMETHING");
    }
  };

  const gameLogic = useCallback(() => {
    const types = selectedPokemon.types.map(({ type }) => type.name);
    const crimeValues = Object.getOwnPropertyDescriptor(crimeObject, crimeSelected.category);
    const solved = types.filter(type => {
        return crimeValues.value.weaknesses.includes(type)
    })
    if (solved.length > 0) {
        updateScore(1);
        return true
    }
    else {
        return false
    }
  })
  
  // call game logic on pokemon selection from modal
  useEffect(() => {
    if (selectedPokemon) {
      const trueOrFalse = gameLogic();
      setCrimeSolved(trueOrFalse);
    }
  }, [selectedPokemon]);

  return (
    <>
      {!selectedPokemon && !crimeSolved ? (
        <>
          <div className="CrimeSceneModal-close-button-container" >
            <img src={closeButton} alt="Close Modal" onClick={() => toggleModal(false)} />
          </div>
          <form onSubmit={(e) => handleFormSubmit(e, pokemonSelectionID)}>
            <div className="CrimeSceneModal-textContainer">
              <h4>{crimeObject[crimeSelected.category].alternate}</h4>
              <p>{crimeObject[crimeSelected.category].backstory}</p>
              <p><b>Crime's location:</b>
                {
                  crimeSelected.location.street.name.length <= 11 ?
                    ` Sorry got nothing for ya ${username}` :
                    ' ' + (crimeSelected.location.street.name).substring(11)
                }
              </p>
            </div>
            <fieldset
              onChange={handleButtonSwitch}
              className="CrimeSceneModal-fieldset"
            >
              <legend>Which Pokemon Detective can solve this mystery?</legend>

              {pokemon.map((pokemonInfo) => {
                return (
                  <div
                    className="CrimeSceneModal-container"
                    key={pokemonInfo.id}
                  >
                    <label htmlFor={pokemonInfo.name}>
                      <img
                        className="CrimeSceneModal-image"
                        src={require(`../assets/svgPokemon/${pokemonInfo.id}.svg`)}
                        alt={pokemon.name}
                      />
                    </label>
                    <input
                      type="radio"
                      id={pokemonInfo.name}
                      name="pokemon"
                      value={pokemonInfo.id}
                      className="CrimeSceneModal-input"
                    ></input>
                  </div>
                );
              })}
            </fieldset>
            <div className="CrimeSceneModal-container-button">
              <button type="submit">Select Your Pokemon Detective</button>
            </div>
          </form>
        </>
      ) : (
        <div className="CrimeSceneModal-resultsContainer">
          <div className="CrimeSceneModal-textContainer">
            <div className="CrimeSceneModal-miniInfoContainer">
              <p><b>Name:</b>{" " + username}</p>
              <p><b>Score: </b>{" " + score}</p>
            </div>
            <h4>{crimeSolved ? "You solved the case" : "You failed the case!"}</h4>
            {!crimeSolved && <h5>{crimeObject[crimeSelected.category].alternate}</h5>}
            <p>{crimeSolved ? crimeObject[crimeSelected.category].solved : crimeObject[crimeSelected.category].failed}</p>
          </div>
          <div className="CrimeSceneModal-miniInfoContainer">
            <button onClick={() => updateLocation(null)}>Play Again</button>
            <Score />
          </div>
        </div>
      )}
    </>

  );
}
