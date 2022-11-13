import Pokemon from "./Pokemon";

export default function PokemonList({ pokemon }) {

    return (
      <>
        <ul className='pokemonList'>
          {pokemon.map((pokemonInfo) => {
            return (
              <li
                key={pokemonInfo.id}
                className='Pokemon shape-section'
              >
                <Pokemon pokemonInfo={pokemonInfo}/>
              </li>
            )
          })}
        </ul>
      </>
    )
}