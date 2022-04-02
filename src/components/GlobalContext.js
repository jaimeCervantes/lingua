import { createContext } from "react";

export const GlobalContext = createContext({});

export function GlobalProvider({ value, children }) {
  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
}