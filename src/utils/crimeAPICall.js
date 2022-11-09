import axios from 'axios';
import { isNotUnique, randNum } from './functions';

export default function crimeAPICall(location, setTheCrime) {
    axios
        .get(`https://data.police.uk/api/crimes-street/all-crime`, {
            params: {
                lat: location[1],
                lng: location[2],
            },
        })
        .then(function (res) {
            let crimeTypes = [];
            let randomCrimes = [];
            let selectedCrimes = [];
            // goes through res data to ID all unique crimes and push to array
            for (let crime in res.data) {
                (!isNotUnique(crimeTypes, res.data[crime].category) && crimeTypes.push(res.data[crime].category));
            }
            // creates an array of (up to) 5 random unique crimes depending on how many unique crimes in prev array
            while (randomCrimes.length < (crimeTypes.length >= 5 ? 5 : crimeTypes.length)) {
                let num = randNum(crimeTypes.length, 0);
                (!isNotUnique(randomCrimes, crimeTypes[num]) && randomCrimes.push(crimeTypes[num]));
            }
            // for each unique crime in prev array, will select a random crime of the same category from the original res data
            randomCrimes.forEach((crimeType) => {
                let crimePool = [];
                for (let crime in res.data) {
                    (res.data[crime].category === crimeType && crimePool.push(res.data[crime]));
                }
                selectedCrimes.push(crimePool[randNum(crimePool.length, 0)])
            })
            // pushes 5 random unique crimes to state
            setTheCrime(selectedCrimes);
        })
}