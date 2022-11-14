import NavBar from './NavBar';
import Game from './Game';
import Footer from './Footer';
import Scoreboard from './Scoreboard';
import About from './About';
import { Routes, Route } from 'react-router-dom';
import { UsernameProvider } from './ContextUsername';
import { ScoreProvider } from './ContextScore';


export default function DetectivePokemon() {
    return (
        <div>
            <NavBar />
            <UsernameProvider>
                <ScoreProvider>
                    <Routes>
                        <Route path="*" element={<Game />} />
                        <Route path="/highscores" element={<Scoreboard />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </ScoreProvider>
            </UsernameProvider>
            <Footer />
        </div>
    )
}