export default function Pokemon({ pokemonInfo }) {
    return (
        <>
            <p><strong>{pokemonInfo.name}</strong></p>
            {pokemonInfo.types.map((pokemonPower) => <p key={pokemonPower.id}>{pokemonPower.type.name}</p>
            )}
        </>
    )
}