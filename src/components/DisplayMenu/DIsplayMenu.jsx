import { useContext } from 'react';
import { StoreContext } from '../../context/Store';

const DisplayMenu = ({ category }) => {
  const { menuItems } = useContext(StoreContext);

  return (
    <div className="menu-display" id="menu-display">
      <h2>Make your choose, click and make your order</h2>
      <div>
        {menuItems.map((item, index) => {
          return (
            <div key={index} className="menu-wrapper">
              <div>
                <img src={item.image} className="menu-img" />
              </div>
              <div className="menu-info">
                <h4>{item.type}</h4>
                <p>{item.desc}</p>
                <h5>{item.price}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DisplayMenu;
