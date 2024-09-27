import { useContext } from 'react';
import { StoreContext } from '../../context/Store';

const DisplayMenu = () => {

  const { menuItems } = useContext(StoreContext);

  return (
    <div className="menu-display" id="menu-display">
      <h2>Make your choose, click and make your order</h2>
    </div>
  );
};

export default DisplayMenu;
