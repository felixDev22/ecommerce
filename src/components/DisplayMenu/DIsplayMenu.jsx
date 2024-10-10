import PropTypes from 'prop-types';
import { useContext } from 'react';
import { StoreContext } from '../../context/Store';
import './displayMenu.css';
import Rating from '../Rating/Rating';
import AddItems from '../addItems/addItems';

const DisplayMenu = ({ category }) => {
  const { menuItems } = useContext(StoreContext);

  return (
    <div className="menu-display" id="menu-display">
      <h2>Make your choice, click and make your order</h2>
      <div className="menuDisplay-container">
        {menuItems.map((item, index) => {
          if (category === 'ALL' || category === item.category) {
            return (
              <div key={index} className="menuDisplay-card">
                <img
                  src={item.image}
                  className="menuDisplay-img"
                  alt={item.type}
                />
                <div className="menu-info">
                  <Rating />
                  <h4>{item.type}</h4>
                  <p>{item.disc}</p>
                  <h5>Ksh {item.price}</h5>
                  <AddItems id={item.id} />
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

DisplayMenu.propType = {
  category: PropTypes.string.isRequired,
};

export default DisplayMenu;
