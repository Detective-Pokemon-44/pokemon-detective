import door from '../assets/images/door.svg';
import Gamebar from './Gamebar';


export default function Location({ handleLocation }) {


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
    ]

    function handleClick(location, lat, lng) {
        handleLocation([location, lat, lng]);
    }

    return (
        <div className="Location card">
            <Gamebar />
            <h2>Where would you like to solve your first crime?</h2>
            <div className="Location-locationsContainer" >
                {locations.map((location) => (
                    <div key={location.city} className="Location-locationCard" onClick={() => handleClick(location.city, location.lat, location.lng)} >
                        <div className="doorEntrance">
                            <div className="doorFront"></div>
                        </div>
                        <div>{location.city}</div>
                    </div>
                ))}
            </div>
        </div >
    )
}