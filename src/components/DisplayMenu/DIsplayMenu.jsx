import PropTypes from 'prop-types';
import { useContext } from 'react';
import { StoreContext } from '../../context/Store';
import './displayMenu.css';
import FoodList from '../Food/FoodList';

const DisplayMenu = ({ category }) => {
  const { menuItems } = useContext(StoreContext);

  return (
    <div className="menu-display" id="menu-display">
      <h2>Make your choice, click and make your order</h2>
      <div className="menuDisplay-container">
        {menuItems
          .filter((item) => category === 'ALL' || item.category === category) 
          .map((item, index) => (
            <div key={index} className="menuDisplay-card">
              <FoodList
                id={item.id}
                image={item.image}
                type={item.name} 
                disc={item.disc}
                price={item.price}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

DisplayMenu.propTypes = {
  category: PropTypes.string.isRequired,
};

export default DisplayMenu;
