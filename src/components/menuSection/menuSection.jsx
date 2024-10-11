import PropTypes from 'prop-types';
import { menuCategory } from '../../assets';
import './menuSection.css';

const MenuSection = ({ category, setCategory }) => {
  return (
    <div className="menu-section">
      <div>
        <h1>Choose Your Favorite Dish</h1>
        <p>
          Scroll to explore a variety of mouthwatering meals waiting for you.
        </p>
      </div>
      <div className="menu-list">
        {menuCategory.map((item, index) => {
          return (
            <div
              className="menu-items"
              key={index}
              onClick={() =>
                setCategory((prev) => (prev === item.name ? 'ALL' : item.name))
              }>
              <img
                src={item.image}
                alt={item.name}
                className={`menu-img ${category === item.name ? 'active' : ''}`}
              />
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

MenuSection.propTypes = {
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.string.isRequired,
};

export default MenuSection;
