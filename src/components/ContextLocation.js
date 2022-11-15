import React, { useState, useContext } from 'react';

const LocationContext = React.createContext();
const LocationUpdateContext = React.createContext();

export function useLocation() {
    return useContext(LocationContext);
}

export function useUpdateLocation() {
    return useContext(LocationUpdateContext);
}

export function LocationProvider({ children }) {
    const [location, setLocation] = useState(0);

    function updateLocation(amt) {
        setLocation(score + amt);
    }

    return (
        <LocationContext.Provider value={location}>
            <LocationUpdateContext.Provider value={updateLocation}>
                {children}
            </LocationUpdateContext.Provider>
        </LocationContext.Provider>
    )
}