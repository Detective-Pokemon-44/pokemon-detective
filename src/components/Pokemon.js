import ReactModal from 'react-modal';
import useToggleState from '../hooks/useToggleState';
import crimeObject from "../utils/crimeObject";
import { capitalizeFirstLetter } from '../utils/functions';

export default function Pokemon({ pokemonInfo, pokemonObject }) {
    const [modalState, toggleModal] = useToggleState()

    const arraysWithCrimeType = pokemonInfo.types.map((individualType) => {
    let temp = []
    // for loop helps to find crimeType value matching with pokemon type, and pushing into temp array to display
    for (let key in crimeObject) {
        crimeObject[key].includes(individualType.type.name) && temp.push(key)
    }
    return temp
    })
    const types = pokemonInfo.types.map(({ type }) => type.name)

  return (
    <>
      <img
        className='Pokemon-image'
        src={require(`../assets/svgPokemon/${pokemonInfo.id}.svg`)}
        onClick={toggleModal}
        alt={pokemonInfo.name}
      />
      <p>
        <strong>{capitalizeFirstLetter(pokemonInfo.name)}</strong>
      </p>
      {pokemonInfo.types.map((pokemonPower) => (
        <p key={pokemonPower.type.name}>{pokemonPower.type.name}</p>
      ))}

      <ReactModal
        isOpen={modalState}
        className='Pokemon-modal'
        onRequestClose={toggleModal}
        appElement={document.getElementById("root")}
      >
        <img
          className='Pokemon-modalImage'
          src={require(`../assets/svgPokemon/${pokemonInfo.id}.svg`)}
          alt={pokemonInfo.name}
        />
        <h3>{capitalizeFirstLetter(pokemonInfo.name)}</h3>
        <div className='Pokemon-modalTypes'>
          {pokemonInfo.types.map((pokemonPower) => (
            <p key={pokemonPower.type.name}>
              {pokemonPower.type.name.toUpperCase()}
            </p>
          ))}
          {arraysWithCrimeType.map((individualType) => {
            return <p>{individualType}</p>
          })}
        </div>
        <p>
          Due to its types, {capitalizeFirstLetter(pokemonInfo.name)} is good at
          solving 'TYPE' crimes.
        </p>
      </ReactModal>
    </>
  )
}