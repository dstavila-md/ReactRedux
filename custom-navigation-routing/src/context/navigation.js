import { createContext } from 'react';

const NavigationContext = createContext({});

const NavigatonProvider = ({ children }) => {
  return (
    <NavigationContext.Provider value={{}}>
      {children}
    </NavigationContext.Provider>
  );
};

export { NavigatonProvider };
export default NavigationContext;
