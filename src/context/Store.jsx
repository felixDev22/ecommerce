import { createContext, useState } from 'react';

export const Store = createContext(null);

// eslint-disable-next-line react/prop-types
const StoreProvider = ({ children }) => {
  const [state, setState] = useState({
    user: null,
    cart: [],
  });

  const contextValue = {
    state,
    setState,
  };

  return <Store.Provider value={contextValue}>{children}</Store.Provider>;
};

export default StoreProvider;
