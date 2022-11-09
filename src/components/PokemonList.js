import Pokemon from './Pokemon';
import PokemonModal from "./PokemonModal"
import { useState } from "react"

export default function PokemonList({ pokemon }) {
    const [isPokemonClicked, setIsPokemonClicked] = useState(false);
    const [pokemonObject, setPokemonObject] = useState()
    function showPokemonModal(pokemonObject){
        setIsPokemonClicked(!isPokemonClicked)
        setPokemonObject(pokemonObject)
    }

    return (
      <>
        <ul className='PokemonList'>
          {pokemon.map((pokemonInfo) => {
            return (
              <li
                key={pokemonInfo.id}
                className='Pokemon'
                onClick={() => showPokemonModal(pokemonInfo)}
              >
                <Pokemon pokemonInfo={pokemonInfo} />
              </li>
            )
          })}
        </ul>
        {isPokemonClicked && (
          <PokemonModal
            pokemonObject={pokemonObject}
          />
        )}
      </>
    )
}