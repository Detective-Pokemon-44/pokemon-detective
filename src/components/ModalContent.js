export default function ModalContent({ pokemon, crimeSelected }) {

  return (
    <>
      {crimeSelected !== null ? <h4>{crimeSelected.category}</h4> : <p>"Select a Crime"</p>}
      
      { crimeSelected !== null && <p>Crime's location: {crimeSelected.location.street.name}</p>}
      
      <fieldset>
        <legend>Which Pokemon Detective can solve this mystery?</legend>

        {pokemon.map((pokemonInfo) => {
          return (
            <div className="Pokemon-radio-option" key={pokemonInfo.name}>
              <label for="pokemon1">{pokemonInfo.name}</label>
              <input
                type="radio"
                id="pokemon1"
                name="detective"
                value="pokemon1"
              ></input>
            </div>
          );
        })}
      
        <div className="Pokemon-radio-submit-button">
          <button type="submit">Confirm Pokemon</button>
        </div>

      </fieldset>
    </>
  );
}
