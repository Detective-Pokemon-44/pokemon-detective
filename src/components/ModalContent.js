import Pokemon from "./Pokemon";

export default function ModalContent({ pokemon, pokemonInfo }) {
  console.log(pokemon[0].name);

  return (
    <>
      <h4>Name of crime selected</h4>
      <p>api. on a foggy day near...</p>

      <fieldset>
        <legend>Which Pokemon Detective can solve this mystery?</legend>

        {pokemon.map((pokemonInfo) => {
                return <p key={pokemonInfo.name}>{pokemonInfo.name}</p>
            })}

        {/* <div className="Pokemon-radio-option">
          <label for="pokemon1">{pokemon && pokemon.name}</label>
          <input
            type="radio"
            id="pokemon1"
            name="detective"
            value="pokemon1"
            checked
          />
        </div>

        <div className="Pokemon-radio-option">
          <label for="pokemon2">2</label>
          <input type="radio" id="pokemon2" name="detective" value="pokemon2" />
        </div>

        <div className="Pokemon-radio-option">
          <label for="pokemon3">3</label>
          <input type="radio" id="pokemon3" name="detective" value="pokemon3" />
        </div>

        <div className="Pokemon-radio-option">
          <label for="pokemon4">4</label>
          <input type="radio" id="pokemon4" name="detective" value="pokemon4" />
        </div>

        <div className="Pokemon-radio-option">
          <label for="pokemon5">5</label>
          <input type="radio" id="pokemon5" name="detective" value="pokemon4" />
        </div>

        <div className="Pokemon-radio-submit-button">
          <button type="submit">Confirm Pokemon</button>
        </div> */}
      </fieldset>
    </>
  );
}
