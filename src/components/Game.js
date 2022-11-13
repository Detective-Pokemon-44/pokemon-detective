import { useState } from 'react';
import LandingPage from './LandingPage';
import Location from './Location';
import CrimeScenes from './CrimeScenes';
import { CSSTransition } from 'react-transition-group';


export default function Game() {
    const [username, setUsername] = useState();
    const [location, setLocation] = useState();
    const [appear, setAppear] = useState(false)

    function handleUsername(name) {
        setUsername(name);
    }

    function handleLocation(location) {
        setLocation(location)
        setAppear(true);
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
                <CSSTransition
                    in={appear}
                    appear={true}
                    timeout={200}
                    classNames="crimescenes"
                >
                    <CrimeScenes
                        username={username}
                        location={location}
                        handleLocation={handleLocation}
                    />
                </CSSTransition>}
        </div >
    )
}