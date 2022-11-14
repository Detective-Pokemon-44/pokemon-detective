import door from '../assets/images/door.svg';
import Gamebar from './Gamebar';

export default function Location({ handleLocation }) {
    const locations = [
        {
            city: "London",
            lat: "51.5072",
            lng: "-0.1276",
        },
        {
            city: "Birmingham",
            lat: "52.4862",
            lng: "-1.8904",
        },
        {
            city: "Liverpool",
            lat: "53.4084",
            lng: "-2.9916",
        },
    ]

    function handleClick(location, lat, lng) {
        handleLocation([location, lat, lng]);
    }

    return (
        <div className="Location card">
            <Gamebar />
            <h2>Pick a Location</h2>
            <div className="Location-locationsContainer">
                {locations.map((location) => (
                    <div key={location.city} className="Location-locationCard" onClick={() => handleClick(location.city, location.lat, location.lng)}>
                        <img src={door} className="Location-locationImg" alt={door} />
                        <div>{location.city}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}