import React, { useState, useContext } from 'react';

const ScoreContext = React.createContext();
const ScoreUpdateContext = React.createContext();
const ScoreResetContext = React.createContext();

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
                    {children}
                </ScoreUpdateContext.Provider>
            </ScoreResetContext.Provider>
        </ScoreContext.Provider>
    )
}