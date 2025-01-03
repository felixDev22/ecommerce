import Rating from '../Rating/Rating';
// import AddItems from '../addItems/addItems';
import './foodlist.css';
import PropTypes from 'prop-types';

const FoodList = ({  type, image, disc, price }) => {
  return (
    <div>
      <img src={image} className="menuDisplay-img" alt={type} />
      <div className="menu-info">
        <Rating />
        <h4>{type}</h4>
        <p>{disc}</p>
        <h5>Ksh {price}</h5>
        {/* <AddItems id={id} /> */}
      </div>
    </div>
  );
};

FoodList.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  disc: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default FoodList;
