export default function Pokemon({ pokemonInfo }) {
    return (
        <>
            <p><strong>{pokemonInfo.name}</strong></p>
            {pokemonInfo.types.map((pokemonPower) => <p key={pokemonPower.type.name}>{pokemonPower.type.name}</p>
            )}
        </>
    )
}