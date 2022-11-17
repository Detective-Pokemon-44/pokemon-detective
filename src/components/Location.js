import { useUpdateLocation } from './ContextLocation';
import Gamebar from './Gamebar';
import doorknob from "../assets/images/circle-solid.svg"
import { CSSTransition } from 'react-transition-group';
import { useRef } from 'react';

export default function Location() {
    const nodeRef = useRef(null);
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
        <CSSTransition
            in={true}
            appear={true}
            timeout={1000}
            classNames="card"
            nodeRef={nodeRef}
        >
            <div className="Location card" ref={nodeRef}>
                <Gamebar />
                <h2>What city?</h2>
                <div className="Location-locationsContainer" >
                    {locations.map((location) => (
                        <div key={location.city} className="Location-locationCard" onClick={() => handleClick(location.city, location.lat, location.lng)} role="img" alt={`Click for ${location.city} `} >
                            <div className="doorEntrance">
                                <img id="city" src={require(`../assets/images/${location.city}.svg`)} alt={`${location.city} coat of arms`} className="coatOfArms" />
                                <div className="doorFront">
                                    <img src={doorknob} alt="little doorknob decoration" className='doorknob' />
                                </div>
                            </div>
                            <label htmlFor='city'>{location.city}</label>
                        </div>
                    ))}
                </div>
            </div >
        </CSSTransition>
    )
}