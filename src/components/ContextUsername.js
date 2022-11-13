import React, { useState, useContext } from 'react';

const UsernameContext = React.createContext();
const UsernameUpdateContext = React.createContext();

export function useUsername() {
    return useContext(UsernameContext);
}

export function useSetUsername() {
    return useContext(UsernameUpdateContext);
}

export default function UsernameProvider({ children }) {
    const [username, setUsername] = useState();

    function updateUsername(userInput) {
        setUsername(userInput)
    }
    return (
        <UsernameContext.Provider value={username}>
            <UsernameUpdateContext.Provider value={updateUsername}>
                {children}
            </UsernameUpdateContext.Provider>
        </UsernameContext.Provider>
    )
}