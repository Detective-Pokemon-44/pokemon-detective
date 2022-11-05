import { useState } from 'react';
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
        <div className="Game">
            {(!username && !location) &&
                <LandingPage
                    handleUsername={handleUsername}
                />}
            {(username && !location) &&
                <Location
                    setLocation={setLocation}
                />}
            {(username && location) &&
                <CrimeScenes
                    username={username}
                    location={location}
                />}
        </div>
    )
}