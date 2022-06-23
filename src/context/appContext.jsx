import { useContext, createContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value="hello world">{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
