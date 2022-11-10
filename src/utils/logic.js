import crimeObject from "./crimeObject"

function gameLogic(pokemon, crime) {

    const types = pokemon.types.map(({ type }) => type.name);
    const crimeValues = Object.getOwnPropertyDescriptor(crimeObject, crime.category);
    const solved = types.filter(type => {
        return crimeValues.value.includes(type)
    })
    if (solved.length > 0) {
        return true
    }
    else {
        return false
    }

}
export default gameLogic;