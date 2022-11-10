import crimeObject from "./crimeObject"

async function gameLogic(pokemon, crime, setScore) {
  const types = pokemon.types.map(({ type }) => type.name)
  const crimeValues = Object.getOwnPropertyDescriptor(
    crimeObject,
    crime.category
  )
  const solved = types.filter((type) => {
    return crimeValues.value.includes(type)
  })
  if (solved.length > 0) {
    alert("YOU DID IT!")
    setScore((prev) => prev+1)
  } else {
    alert("AWWWW TIME TO GO HOME!")
  }
}
export default gameLogic;