import { createContext } from "react";
import { doctors } from "../assets/assets"; // Assuming you have a data file with doctors information

export const AppContext = createContext();

const AppProvider = (props) => {
  const value = {
    doctors, // Providing the doctors data to the context
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppProvider;
