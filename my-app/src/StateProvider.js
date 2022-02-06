import React, { createContext, useContext,
useReducer} from 'react';


// förbereder data lagret, alltså dit jag ska skicka datan för att sedan kunna hämta ner den till andra ställen
export const StateContext = createContext();

//Wrap our app och skickar datalayer till alla komponents
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//används för att hämta information från data layer 
export const useStateValue = () => useContext(StateContext);