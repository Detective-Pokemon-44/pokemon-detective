import React, { useState, useContext } from 'react';

const UsernameContext = React.createContext();
const UsernameUpdateContext = React.createContext();

export function useUsername() {
    return useContext(UsernameContext);
}

export function useUpdateUsername() {
    return useContext(UsernameUpdateContext);
}

export function UsernameProvider({ children }) {
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