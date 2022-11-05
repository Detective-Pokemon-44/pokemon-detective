import door from '../assets/images/door.svg';

export default function Location({setLocation}) {
    const locations = [
      {
        city: "London",
        lat: "51.5072",
        lng: "-0.1276",
      },
      {
        // bicycle-theft
        // criminal-damage-arson
        // violent-crime
        city: "Birmingham",
        lat: "52.4862",
        lng: "-1.8904",
      },
      {
        // criminal-damage-arson
        // bicycle-theft
        // burglary
        city: "Liverpool",
        lat: "53.4084",
        lng: "-2.9916",
      },
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