import { useState, useEffect, useRef } from 'react';
import ReactModal from 'react-modal';
import useToggleState from '../hooks/useToggleState';
import { isNotUnique, randNum } from '../utils/functions';
import crimeAPICall from '../utils/crimeAPICall';
import { useLocation } from './ContextLocation';
import CrimeSceneModal from "./CrimeSceneModal";
import Gamebar from './Gamebar';
import CrimeEvent from './CrimeEvent';
import PokemonList from './PokemonList';
import { CSSTransition } from 'react-transition-group';

export default function CrimeScenes() {

  const [crimeSceneArray, setCrimeSceneArray] = useState();
  const [pokemonURL, setPokemonURL] = useState([]);
  const [pokemon, setPokemon] = useState([]);
  const [crimeSelected, setCrimeSelected] = useState(null);
  const [modalState, toggleModal] = useToggleState();
  const [inProp, setInProp] = useState(false);
  const nodeRef = useRef(null);
  const location = useLocation();


  const handleCrimeClick = (crime) => {
    setCrimeSelected(crime);
    toggleModal(true);
  }


  const setTheCrime = (crime) => {
    setCrimeSceneArray(crime);
    setInProp(true);

  }

  // this function creates an array of 5 unique pokemon
  function randomPokemon() {
    let tempArray = [];
    while (tempArray.length < 5) {
      let newNumber = randNum(151, 1);
      // when none of the existing array entries matches the random number push to array
      (!isNotUnique(tempArray, `https://pokeapi.co/api/v2/pokemon/${newNumber}`) && tempArray.push(`https://pokeapi.co/api/v2/pokemon/${newNumber}`))
    }
    setPokemonURL(tempArray);
  }

  // on component load, initializes crime and pokemon array values
  useEffect(() => {
    crimeAPICall(location, setTheCrime);
    randomPokemon();
  }, [location])

  // Function to convert the Pokemon URLs array into new array by making API call to access each URLs and get Pokemon Name and Type
  useEffect(() => {
    Promise.all(
      pokemonURL.map(async (pokemon) => {
        const res = await fetch(pokemon);
        const json = res.json();
        return json;
      })
    ).then((data) => {
      setPokemon(data);
    })
  }, [pokemonURL]);

  return (
    <>
      <CSSTransition
        in={inProp}
        timeout={1000}
        classNames="card"
        nodeRef={nodeRef}
        unmountOnExit
      >
        <div className='CrimeScenes card' ref={nodeRef}>
          <Gamebar />
          {crimeSceneArray && (
            <ul className='CrimeScenes-category'>
              {crimeSceneArray &&
                crimeSceneArray.map((individual, i) => {
                  return (
                    <li
                      key={individual.id}
                      onClick={(e) => {
                        handleCrimeClick(individual)
                      }}
                    >
                      <CrimeEvent individual={individual} i={i} />
                    </li>
                  )
                })}
            </ul>
          )}
          {pokemon && <PokemonList pokemon={pokemon} />}
          {pokemon && (
            <ReactModal
              isOpen={modalState}
              className='CrimeSceneModal-modal'
              onRequestClose={toggleModal}
              appElement={document.getElementById("root")}
              closeTimeoutMS={500}
              shouldCloseOnOverlayClick={false}
              contentLabel={"Select Pokemon for the Crime"}
            >
              <CrimeSceneModal pokemon={pokemon} crimeSelected={crimeSelected} toggleModal={toggleModal} />
            </ReactModal>
          )}
        </div>
      </CSSTransition>
    </>
  )
}
