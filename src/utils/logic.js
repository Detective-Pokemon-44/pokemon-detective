import crimeObject from "./crimeObject"

async function gameLogic(pokemon, crime){
    // 0: "normal"
    // 1: "flying"
    const types = pokemon.types.map(({type}) => type.name)
    console.log(crimeObject);
    let test = [];
    crimeObject.forEach(async (individual) => {
        const checkValue = Object.getOwnPropertyDescriptor(
          individual,
          crime.category
        )
        checkValue.configurable && test.push(checkValue.value)
        return test
    })
    // show us the strength of 3 types
    console.log(test[0]);
    // const checkValue = Object.getOwnPropertyDescriptor(object1, "property1")
    console.log(pokemon);
    console.log(crime);
}
export default gameLogic;