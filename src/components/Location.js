import { useUpdateLocation } from './ContextLocation';
import door from '../assets/images/door.svg';
import Gamebar from './Gamebar';

export default function Location() {
    const locations = [
        {
            city: "Sheffield",
            lat: "53.3811",
            lng: "-1.4701",
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
    ];
    const updateLocation = useUpdateLocation();

    function handleClick(location, lat, lng) {
        updateLocation([location, lat, lng]);
    }

    return (
        <div className="Location card">
            <Gamebar />
            <h2>Where would you like to solve your first crime?</h2>
            <div className="Location-locationsContainer" >
                {locations.map((location) => (
                    <div key={location.city} className="Location-locationCard" onClick={() => handleClick(location.city, location.lat, location.lng)} role="img" alt={`Click for ${location.city} `} >
                        <div className="doorEntrance">
                            <div className="doorFront"></div>
                        </div>
                        <p>{location.city}</p>
                    </div>
                ))}
            </div>
        </div >
    )
}