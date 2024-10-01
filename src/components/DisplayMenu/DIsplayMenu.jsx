import { useContext, useState } from 'react';
import { StoreContext } from '../../context/Store';
import './displayMenu.css';
import Rating from '../Rating/Rating';

const DisplayMenu = ({ category }) => {
  const { menuItems } = useContext(StoreContext);
  const [rate, setRate] = useState(0);

  return (
    <div className="menu-display" id="menu-display">
      <h2>Make your choose, click and make your order</h2>
      <div className="menuDisplay-container">
        {menuItems.map((item, index) => {
          return (
            <div key={index} className="menuDisplay-card">
              <img src={item.image} className="menuDisplay-img" />

              <div className="menu-info">
                <Rating />
                <h4>{item.type}</h4>
                <p>{item.disc}</p>
                <h5>Ksh {item.price}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DisplayMenu;
