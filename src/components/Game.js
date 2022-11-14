import { useState } from 'react';
import LandingPage from './LandingPage';
import Location from './Location';
import CrimeScenes from './CrimeScenes';
import { useUsername } from './ContextUsername';

export default function Game() {
    const username = useUsername();
    const [location, setLocation] = useState();

    function handleLocation(location) {
        setLocation(location)
    }

    return (
        <div className="main">
            {(!username && !location) &&
                <LandingPage />
            }
            {(username && !location) &&
                <Location
                    handleLocation={handleLocation}
                />}
            {(username && location) &&
                <CrimeScenes
                    location={location}
                    handleLocation={handleLocation}
                />
            }
        </div >
    )
}