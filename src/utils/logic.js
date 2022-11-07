import crimeObject from "./crimeObject"

function gameLogic(pokemon, crime) {
    const types = pokemon.types.map(({ type }) => type.name)
    console.log(types);

}
export default gameLogic;