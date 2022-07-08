import { useContext, createContext, useState } from "react";

const RadioContext = createContext();

const RadioProvider = ({ children }) => {
  const [positionCentered, setPositionCentered] = useState(true);
  const [inHomepage, setInHomepage] = useState(true);

  return (
    <RadioContext.Provider
      value={{
        positionCentered,
        setPositionCentered,
        inHomepage,
        setInHomepage,
      }}
    >
      {children}
    </RadioContext.Provider>
  );
};

const useRadio = () => useContext(RadioContext);

export { useRadio, RadioProvider };
