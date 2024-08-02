import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DarkModeContextProvider } from "./context/darkModeContext";
import { LanguageContextProvider } from "./context/languageContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <LanguageContextProvider>
        <App />
      </LanguageContextProvider>
    </DarkModeContextProvider>
  </React.StrictMode>
);
