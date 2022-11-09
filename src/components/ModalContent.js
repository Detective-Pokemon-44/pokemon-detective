import Pokemon from "./Pokemon";

export default function ModalContent({ pokemon, crimeSelected }) {
  console.log(crimeSelected);
  return (
    <>
      {crimeSelected !== null ? <h4>you selected a crime</h4> : "Select a Crime"}
      <p> on a foggy day near...</p>
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
                // checked
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
