import { useState, useRef } from 'react';
import LandingPage from './LandingPage';
import Location from './Location';
import CrimeScenes from './CrimeScenes';



export default function Game() {
    const [username, setUsername] = useState();
    const [location, setLocation] = useState();

    function handleUsername(name) {
        setUsername(name);
    }

    function handleLocation(location) {
        setLocation(location)
    }


    return (
        <div className="main">
            {(!username && !location) &&
                <LandingPage
                    handleUsername={handleUsername}
                />
            }
            {(username && !location) &&
                <Location
                    setLocation={setLocation}
                />}
            {(username && location) &&
                <CrimeScenes
                    username={username}
                    location={location}
                    handleLocation={handleLocation}
                />
            }
        </div >
    )
}