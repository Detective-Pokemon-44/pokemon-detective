import crimeObject from "../utils/crimeObject";
export default function PokemonModal({ pokemonObject }) {

const arraysWithCrimeType = pokemonObject.types.map((individualType) => {
    let temp = []
    // for loop helps to find crimeType value matching with pokemon type, and pushing into temp array to display
    for (let key in crimeObject) {
    crimeObject[key].includes(individualType.type.name) && temp.push(key)
    }
    return temp
})
const types = pokemonObject.types.map(({ type }) => type.name)
return (
<>
    <img
    className='Pokemon-image'
    src={require(`../assets/svgPokemon/${pokemonObject.id}.svg`)}
    alt="Pokemon's image"
    />
    <p>{pokemonObject.name}</p>
    <p>This pokemon type(s) is(are) {types}</p>
    {arraysWithCrimeType.map((individualType) => {
    return (
        <p>{individualType}</p>
    )
    })}
</>
)
}