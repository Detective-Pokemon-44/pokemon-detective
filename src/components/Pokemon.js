import ReactModal from 'react-modal';
import useToggleState from '../hooks/useToggleState';

export default function Pokemon({ pokemonInfo }) {
    const [modalState, toggleModal] = useToggleState();
    return (
        <>
            <img className="Pokemon-image" src={require(`../assets/svgPokemon/${pokemonInfo.id}.svg`)} onClick={toggleModal} alt="Pokemon's image" />
            <p><strong>{pokemonInfo.name}</strong></p>
            {pokemonInfo.types.map((pokemonPower) => <p key={pokemonPower.type.name}>{pokemonPower.type.name}</p>
            )}

            <ReactModal
                isOpen={modalState}
                className="Pokemon-modal"
                onRequestClose={toggleModal}
            >
                <p>I am {pokemonInfo.name}</p>
            </ReactModal>
        </>
    )
}