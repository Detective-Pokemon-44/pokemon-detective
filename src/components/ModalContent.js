import { useState } from "react";

export default function ModalContent({ pokemon, crimeSelected, handlePokemonSelection }) {
  const [pokemonSelection, setPokemonSelection] = useState({});

  const handleButtonSwitch = (e) => {
    setPokemonSelection(parseInt(e.target.value));

  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const foundPokemon = pokemon.find(pokemon => pokemon.id);
    setPokemonSelection(foundPokemon);
    handlePokemonSelection(foundPokemon);
  }
  return (
    <>{
      !pokemonSelection ?
        <form onSubmit={(e) => handleFormSubmit(e)}>
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
        </form>
        : <h4></h4>
    }
    </>
  );
}
