import { useContext, createContext, useState } from "react";

const RadioContext = createContext();

const RadioProvider = ({ children }) => {
  const [positionCentered, setPositionCentered] = useState(true);
  return (
    <RadioContext.Provider value={{ positionCentered, setPositionCentered }}>
      {children}
    </RadioContext.Provider>
  );
};

const useRadio = () => useContext(RadioContext);

export { useRadio, RadioProvider };
