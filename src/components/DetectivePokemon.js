import NavBar from './NavBar';
import Game from './Game';
import Footer from './Footer';
import Scoreboard from './Scoreboard';

import {Routes, Route} from 'react-router-dom';

export default function DetectivePokemon() {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="*" element={<Game />} />
                <Route path="/highscores" element={<Scoreboard />} />
            </Routes>
            <Footer />
        </div>
    )
}