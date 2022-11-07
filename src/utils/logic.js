import crimeObject from "./crimeObject"

function gameLogic(pokemon, crime){
    const types = pokemon.types.filter(({type}) => type.type)
    console.log(types);
    console.log(pokemon);
    console.log(crime);
}
export default gameLogic;