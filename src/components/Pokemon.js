import ReactModal from 'react-modal';
import {useState} from 'react';

export default function Pokemon({ pokemonInfo }) {
    const [modalOpen, toggleModalOpen] = useState(false);
    return (
        <>
            <img className="Pokemon-image" src={require(`../assets/svgPokemon/${pokemonInfo.id}.svg`)} onClick={() => toggleModalOpen(!modalOpen)} alt="Pokemon's image" />
            <p><strong>{pokemonInfo.name}</strong></p>
            {pokemonInfo.types.map((pokemonPower) => <p key={pokemonPower.type.name}>{pokemonPower.type.name}</p>
            )}

            <ReactModal isOpen = {modalOpen} onRequestClose={() => toggleModalOpen(!modalOpen)}>
                <p>I'm a modal</p> 
            </ReactModal>
        </>
    )
}