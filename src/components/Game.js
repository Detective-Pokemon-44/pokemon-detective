import { useUsername } from './ContextUsername';
import { useLocation } from './ContextLocation';

import LandingPage from './LandingPage';
import Location from './Location';
import CrimeScenes from './CrimeScenes';

export default function Game() {
    const username = useUsername();
    const location = useLocation();

    return (
        <div className="main">
            {(!username && !location) && <LandingPage />}
            {(username && !location) && <Location />}
            {(username && location) && <CrimeScenes />}
        </div >
    )
}