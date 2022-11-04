import React, { createContext, useContext, useReducer } from "react";

export const ContextProvider = createContext();

export const StateProvider = ({ initialState, reducer, children }) => (
    <ContextProvider.Provider value={useReducer(reducer, initialState)}>
      {children}
    </ContextProvider.Provider>
  );

export const useStateValue = () => useContext(ContextProvider);
