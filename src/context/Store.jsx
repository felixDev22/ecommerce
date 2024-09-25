import { createContext } from 'react';
import { menuItems } from '../assets';

export const Store = createContext(null);

const StoreProvider = (props) => {
  const contextValue = {
    menuItems,
  };

  return <Store.Provider value={contextValue}>{props.children}</Store.Provider>;
};

export default StoreProvider;
