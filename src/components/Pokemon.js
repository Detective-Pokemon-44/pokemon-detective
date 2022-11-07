export default function Pokemon({ pokemonInfo }) {
    return (
        <>
            <img className="Pokemon-image" src={require(`../assets/svgPokemon/${pokemonInfo.id}.svg`)} alt="Pokemon's image" />
            <p><strong>{pokemonInfo.name}</strong></p>
            {pokemonInfo.types.map((pokemonPower) => <p key={pokemonPower.type.name}>{pokemonPower.type.name}</p>
            )}
        </>
    )
}