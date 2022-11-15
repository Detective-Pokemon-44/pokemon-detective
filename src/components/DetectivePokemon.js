import { Routes, Route } from 'react-router-dom';

import { UsernameProvider } from './ContextUsername';
import { ScoreProvider } from './ContextScore';
import { LocationProvider} from './ContextLocation';

import NavBar from './NavBar';
import Game from './Game';
import Footer from './Footer';
import Scoreboard from './Scoreboard';
import About from './About';

export default function DetectivePokemon() {
    return (
        <div>
            <NavBar />
            <UsernameProvider>
                <LocationProvider>
                    <ScoreProvider>
                        <Routes>
                            <Route path="*" element={<Game />} />
                            <Route path="/highscores" element={<Scoreboard />} />
                            <Route path="/about" element={<About />} />
                        </Routes>
                    </ScoreProvider>
                </LocationProvider>
            </UsernameProvider>
            <Footer />
        </div>
    )
}