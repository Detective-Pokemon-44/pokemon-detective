import React, { useState, useContext } from 'react';

const ScoreContext = React.createContext();
const ScoreUpdateContext = React.createContext();
const ScoreResetContext = React.createContext();
const EndScoreContext = React.createContext();
const EndScoreUpdateContext = React.createContext();

export function useEndScore() {
    return useContext(EndScoreContext);
}

export function useEndScoreUpdate() {
    return useContext(EndScoreUpdateContext);
}

export function useScore() {
    return useContext(ScoreContext);
}

export function useUpdateScore() {
    return useContext(ScoreUpdateContext);
}

export function useResetScore() {
    return useContext(ScoreResetContext);
}

export function ScoreProvider({ children }) {
    const [score, setScore] = useState(0);
    const [endScore, setEndScore] = useState(0);

    function updateEndScore(amt) {
        setEndScore(amt);
    }

    function updateScore(amt) {
        setScore(score + amt);
    }

    function resetScore() {
        setScore(0);
    }

    return (
        <ScoreContext.Provider value={score}>
            <ScoreResetContext.Provider value={resetScore}>
                <ScoreUpdateContext.Provider value={updateScore}>
                    <EndScoreContext.Provider value={endScore}>
                        <EndScoreUpdateContext.Provider value={updateEndScore}>
                            {children}
                        </EndScoreUpdateContext.Provider>
                    </EndScoreContext.Provider>
                </ScoreUpdateContext.Provider>
            </ScoreResetContext.Provider>
        </ScoreContext.Provider>
    )
}