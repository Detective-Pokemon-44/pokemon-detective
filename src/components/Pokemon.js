import ReactModal from 'react-modal';
import useToggleState from '../hooks/useToggleState';
import crimeObject from "../utils/crimeObject";
import { capitalizeFirstLetter, isNotUnique } from '../utils/functions';
import closeButton from "../assets/images/rectangle-xmark-solid.svg"

export default function Pokemon({ pokemonInfo }) {
  const [modalState, toggleModal] = useToggleState()

  console.log(pokemonInfo)
  let crimeStrengths = []
  pokemonInfo.types.map((individualType) => {
    // for loop helps to find crimeType value matching with pokemon type, and pushing into crimeStrengths array to display
    for (let key in crimeObject) {
      (crimeObject[key].weaknesses.includes(individualType.type.name) && !isNotUnique(crimeStrengths, key) && crimeStrengths.push(key))
    }
  })
  return (
    <>
      <div className='Pokemon-diamondShape' onClick={toggleModal}>
        <div className='Pokemon-itemCount'>
          <img
            className='Pokemon-image'
            src={require(`../assets/svgPokemon/${pokemonInfo.id}.svg`)}
            alt={pokemonInfo.name}
          />
          {/* {pokemonInfo.types.map((pokemonPower) => (
            <p key={pokemonPower.type.name}>{pokemonPower.type.name}</p>
          ))} */}
          <div className='Pokemon-hover'>
            <p className='Pokemon-nameCenter'>
              <strong>{capitalizeFirstLetter(pokemonInfo.name)}</strong>
            </p>
            <p className='Pokemon-detail'>Pokemon Detail</p>
          </div>
        </div>
      </div>

      <ReactModal
        isOpen={modalState}
        className='Pokemon-modal'
        onRequestClose={toggleModal}
        appElement={document.getElementById("root")}
      >
        <div className='CrimeSceneModal-close-button-container'>
          <img
            src={closeButton}
            alt='Close Modal'
            onClick={() => toggleModal(false)}
          />
        </div>
        <h2 className='Pokemon-name'>
          {capitalizeFirstLetter(pokemonInfo.name)}
        </h2>
        <div className='Pokemon-imageContainer'>
          <img
            className='Pokemon-modalImage'
            src={require(`../assets/svgPokemon/${pokemonInfo.id}.svg`)}
            alt={pokemonInfo.name}
          />
        </div>
        <div className='Pokemon-info'>
          <p>
            Experience: {pokemonInfo.base_experience}, Height:{" "}
            {pokemonInfo.height}′, Weight: {pokemonInfo.weight} lbs
          </p>
        </div>
        <div className='Pokemon-modalTypes'>
          <div className="Pokemon-pokeball">
            <img src={require(`../assets/svgPokemon/pokemonball.png`)} alt="Pokemon-ball" srcSet="" />
          </div>
          {pokemonInfo.types.map((pokemonPower) => (
            <p key={pokemonPower.type.name} className='Pokemon-typeName'>
              {pokemonPower.type.name.toUpperCase()}
            </p>
          ))}
        </div>
        <p className='Pokemon-hint'>
          {capitalizeFirstLetter(pokemonInfo.name)} is good for crimes related to{" "}
          {crimeStrengths.map((individualType, i, arr) =>
            i + 1 === arr.length
              ? `and ${crimeObject[individualType].pokemonskill.replaceAll(
                "-",
                " "
              )}.`
              : `${crimeObject[individualType].pokemonskill.replaceAll(
                "-",
                " "
              )}, `
          )}
        </p>
      </ReactModal>
    </>
  )
}