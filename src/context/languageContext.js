import { createContext, useReducer } from "react";
import LanguageReducer from "./languageReducer";

const INITIAL_STATE = {
  language: "ja",
};

export const LanguageContext = createContext(INITIAL_STATE);

export const LanguageContextProvider = ({ children }) => {
  const [state, languageDispatch] = useReducer(LanguageReducer, INITIAL_STATE);
  return (
    <LanguageContext.Provider
      value={{ language: state.language, languageDispatch }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
