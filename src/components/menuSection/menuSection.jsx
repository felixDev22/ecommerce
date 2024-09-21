import { menuCategory } from '../../assets';
import './menuSection.css';

const MenuSection = () => {
  return (
    <div className="menu-section">
      <div>
        <h1>Choose Your Favorite Dish</h1>
        <p>
          Scroll to explore a variety of mouthwatering meals waiting for you
        </p>
      </div>
      <div className="menu-list">
        {menuCategory.map((item, index) => {
          return (
            <div className="menu-items" key={index}>
              <img src={item.image} alt={item.name} className="menu-img" />
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuSection;
