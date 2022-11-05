import door from '../assets/images/door.svg';

export default function Location({setLocation}) {
    const locations = ["London", "Yorkshire", "Worcestshire"]

    function handleClick(location) {
        setLocation(location);
    }

    return (
        <div className="Location card">
            <h2>Pick a Location</h2>
            <div className="Location-locationsContainer">
                {locations.map((location) => (
                    <div key={location} className="Location-locationCard" onClick={() => handleClick(location)}>
                        <img src={door} className="Location-locationImg" alt={door} />
                        <div>{location}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}