import React, { useState, useContext } from 'react';

const ScoreContext = React.createContext();
const ScoreUpdateContext = React.createContext();

export function useScore() {
    return useContext(ScoreContext);
}

export function useUpdateScore() {
    return useContext(ScoreUpdateContext);
}

export function ScoreProvider({ children }) {
    const [score, setScore] = useState();

    function updateScore(amt) {
        setScore(score + amt);
    }

    return (
        <ScoreContext.Provider value={score}>
            <ScoreUpdateContext.Provider value={updateScore}>
                {children}
            </ScoreUpdateContext.Provider>
        </ScoreContext.Provider>
    )
}