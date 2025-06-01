import { createContext, useState } from 'react';

export const stateManagerContext = createContext();

export const StateManager = ({children}) => {
    const [globalState, setGlobalState] = useState({});
    return (
        <stateManagerContext.Provider value={{globalState, setGlobalState}}>
            {children}
        </stateManagerContext.Provider>
    )
}
