import { useState, createContext } from 'react';

export const HamContext = createContext();

export const HamProvider = ({ children }) => {
  const [isHamOpen, setHamOpen] = useState(false);

  const toggleMenu = () => {
    console.log("toggle click");
    setHamOpen(prevState => !prevState);
  };

  return (
    <HamContext.Provider value={{ isHamOpen, toggleMenu }}>
      {children}
    </HamContext.Provider>
  );
};
