import door from '../assets/images/door.svg';

export default function Location({setLocation}) {
    const locations = [
        {
            city: "London",
            lat: "51.5072",
            lng: "-0.1276"
        },
        {
            city: "Yorkshire",
            lat: "53.9191",
            lng: "-1.0792"
        },
        {
            city: "Worcestshire",
            lat: "52.2545",
            lng: "-2.2668"
        }
    ]

    function handleClick(location, lat, lng) {
        setLocation([location, lat, lng]);
        console.log(location);
    }

    return (
        <div className="Location card">
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