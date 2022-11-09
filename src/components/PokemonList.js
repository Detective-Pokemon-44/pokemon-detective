import Pokemon from "./Pokemon";

export default function PokemonList({ pokemon }) {

    return (
      <>
        <ul className='PokemonList'>
          {pokemon.map((pokemonInfo) => {
            return (
              <li
                key={pokemonInfo.id}
                className='Pokemon'
              >
                <Pokemon pokemonInfo={pokemonInfo}/>
              </li>
            )
          })}
        </ul>
      </>
    )
}