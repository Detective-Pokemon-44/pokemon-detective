// generic function that will return true if a value exists in an array
function isNotUnique(arr, val) {
    return arr.some((arrVal) => val === arrVal);
}

// generates a random number based on range limits
function randNum(max, min) {
    return Math.floor(Math.random() * max + min);
}

export { isNotUnique, randNum };