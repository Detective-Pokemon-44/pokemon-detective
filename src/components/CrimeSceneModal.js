import { useState, useEffect } from "react";
import gameLogic from "../utils/logic";

export default function CrimeSceneModal({ pokemon, crimeSelected, handleLocation }) {
  const [pokemonSelectionID, setPokemonSelectionID] = useState(null);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [crimeSolved, setCrimeSolved] = useState(null);


  const handleButtonSwitch = (e) => {
    setPokemonSelectionID(parseInt(e.target.value));
  }

  const handleFormSubmit = (e, pokemonId) => {
    e.preventDefault();
    const pokemonFoundById = pokemon.find(pokemon => pokemon.id === pokemonId);
    console.log(pokemonFoundById)
    setSelectedPokemon(pokemonFoundById)
  }

  // call game logic on pokemon selection from modal
  useEffect(() => {
    if (selectedPokemon !== null) {

      const trueOrFalse = gameLogic(selectedPokemon, crimeSelected);
      setCrimeSolved(trueOrFalse);
    }

  }, [selectedPokemon])

  return (
    <>
      {
        !selectedPokemon && !crimeSolved ?
          <form onSubmit={(e) => handleFormSubmit(e, pokemonSelectionID)}>
            <h4>{crimeSelected.category}</h4>
            <p>Crime's location: {crimeSelected.location.street.name}</p>

            <fieldset onChange={handleButtonSwitch}>
              <legend>Which Pokemon Detective can solve this mystery?</legend>

              {pokemon.map((pokemonInfo) => {
                return (
                  < div className="Pokemon-radio-option" key={pokemonInfo.id} >
                    <label htmlFor={pokemonInfo.name}>{pokemonInfo.name}</label>
                    <input
                      type="radio"
                      id={pokemonInfo.name}
                      name="pokemon"
                      value={pokemonInfo.id}
                    ></input>
                  </div>
                );
              })}
            </fieldset>
            <div className="Pokemon-radio-submit-button">
              <button type="submit">Select Your Pokemon Detective</button>
            </div>
          </form> :
          crimeSolved === true ?
            <>
              <h4>YOU SOLVED THE CASE</h4>
              <button onClick={() => handleLocation(null)}> Take me Home</button>
            </>
            :
            <>
              <h4>YOU FAILED THE CASE</h4>
              <button onClick={() => handleLocation(null)}> Take me Home</button>
            </>

      }
    </>
  );
}
