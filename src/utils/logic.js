import crimeObject from "./crimeObject";

export default function gameLogic(pokemon, crime, updateScore) {
    const types = pokemon.types.map(({ type }) => type.name);
    const crimeValues = Object.getOwnPropertyDescriptor(crimeObject, crime.category);
    const solved = types.filter(type => {
        return crimeValues.value.weaknesses.includes(type)
    })
    if (solved.length > 0) {
        updateScore(1);
        return true
    }
    else {
        return false
    }
}