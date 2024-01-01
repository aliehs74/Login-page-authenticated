import React, { useReducer, useContext } from "react";
import { Reducer, initialState } from "./Reducer";

const reactContext = React.createContext();

export function useContextCustom() {
  const context = useContext(reactContext);
  return context; //context get value from Provider
}//i make it Custom because we dont have access to "reactContext" in everywhere

export function MainProvider({ children }) {
  const useReducerOutput = useReducer(Reducer, initialState);

  return (
    <reactContext.Provider value={useReducerOutput}>
      {children}
    </reactContext.Provider>
  );
}// make custom provider and initial value  
