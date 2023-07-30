import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

// building a provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// inside a component
export const useStateValue = () => useContext(StateContext);