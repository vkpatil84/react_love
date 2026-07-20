import { createContext, useContext, useState } from "react";

const JourneyContext = createContext();

export function JourneyProvider({ children }) {
    const [journey, setJourney] = useState({
        screen: "boot",
        date: null,
        time: null,
        food: null,
        activity: null
    });
    function navigate(screen) {
        setJourney(prev => ({
            ...prev,
            screen
        }));
    }
    function update(field, value) {
        setJourney(prev => ({
            ...prev,
            [field]: value
        }));
    }
    return (
        <JourneyContext.Provider
            value={{
                journey,
                navigate,
                update
            }}
        >
            {children}
        </JourneyContext.Provider>
    );
}
export function useJourney() {
    return useContext(JourneyContext);
}