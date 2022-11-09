import ReactModal from 'react-modal';
import useToggleState from '../hooks/useToggleState';
import { capitalizeFirstLetter } from '../utils/functions';

export default function Pokemon({ pokemonInfo }) {
    const [modalState, toggleModal] = useToggleState();
    return (
        <>
            <img className="Pokemon-image" src={require(`../assets/svgPokemon/${pokemonInfo.id}.svg`)} onClick={toggleModal} alt="Pokemon's image" />
            <p><strong>{capitalizeFirstLetter(pokemonInfo.name)}</strong></p>
            {pokemonInfo.types.map((pokemonPower) => <p key={pokemonPower.type.name}>{pokemonPower.type.name}</p>
            )}

            <ReactModal
                isOpen={modalState}
                className="Pokemon-modal"
                onRequestClose={toggleModal}
                appElement={document.getElementById('root')}
            >
                <img className="Pokemon-modalImage" src={require(`../assets/svgPokemon/${pokemonInfo.id}.svg`)} alt="Pokemon's image" />
                <h3>{capitalizeFirstLetter(pokemonInfo.name)}</h3>
                <div className="Pokemon-modalTypes">
                    {pokemonInfo.types.map((pokemonPower) => <p key={pokemonPower.type.name}>{pokemonPower.type.name.toUpperCase()}</p>
                    )}
                </div>
                <p>Due to its types, {capitalizeFirstLetter(pokemonInfo.name)} is good at solving 'TYPE' crimes.</p>
            </ReactModal>
        </>
    )
}