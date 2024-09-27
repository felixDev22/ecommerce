import { createContext } from 'react';
import { menuItems } from '../assets';

export const StoreContext = createContext(null);

const StoreProvider = (props) => {
  const contextValue = {
    menuItems,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
