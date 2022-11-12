import { useState, useEffect } from "react";
import crimeObject from "../utils/crimeObject";
import gameLogic from "../utils/logic";
import Score from "./Score";

export default function CrimeSceneModal({
  pokemon,
  crimeSelected,
  handleLocation,
  username,
  score,
  setScore
}) {
  const [pokemonSelectionID, setPokemonSelectionID] = useState(null);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [crimeSolved, setCrimeSolved] = useState(null);

  const handleButtonSwitch = (e) => {
    setPokemonSelectionID(parseInt(e.target.value));
  };

  const handleFormSubmit = (e, pokemonId) => {
    e.preventDefault();
    if (pokemonId) {
      const pokemonFoundById = pokemon.find(
        (pokemon) => pokemon.id === pokemonId
      );
      console.log(pokemonFoundById);
      setSelectedPokemon(pokemonFoundById);
    } else {
      alert("PICK SOMETHING");
    }
  };

  // call game logic on pokemon selection from modal
  useEffect(() => {
    if (selectedPokemon !== null) {
      const trueOrFalse = gameLogic(selectedPokemon, crimeSelected, setScore);
      setCrimeSolved(trueOrFalse);
    }
  }, [selectedPokemon]);

  return (
    <>
      {!selectedPokemon && !crimeSolved ? (
        <form onSubmit={(e) => handleFormSubmit(e, pokemonSelectionID)}>
          <h4>{crimeObject[crimeSelected.category].alternate}</h4>
          <p>Crime's location: {crimeSelected.location.street.name}</p>

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
          <div className="Pokemon-radio-submit-button">
            <button type="submit">Select Your Pokemon Detective</button>
          </div>
        </form>
      ) : crimeSolved === true ? (
        <>
          <h4>YOU SOLVED THE CASE</h4>
          <button onClick={() => handleLocation(null)}> Take me Home</button>
          <Score username={username} score={score} />
        </>
      ) : (
        <>
          <h4>YOU FAILED THE CASE</h4>
          <button onClick={() => handleLocation(null)}> Take me Home</button>
          <Score username={username} score={score} />
        </>
      )}

    </>
  );
}
