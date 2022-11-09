// generic function that will return true if a value exists in an array
function isNotUnique(arr, val) {
    return arr.some((arrVal) => val === arrVal);
}

// generates a random number based on range limits
function randNum(max, min) {
    return Math.floor(Math.random() * max + min);
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function compareValue(arr, arr2) {
  return arr.some((arrVal) => arr2.some((val) => arrVal === val))
}

export { isNotUnique, randNum, capitalizeFirstLetter, compareValue };