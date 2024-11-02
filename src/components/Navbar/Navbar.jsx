import './Navbar.css';
import { assets } from '../../assets/index';
import { icons } from '../../assets/index';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ setShowLogin }) => {
  return (
    <div className="nav">
      <img src={assets.logo} alt="logo" className="logo" />
      <ul className="nav-menu">
        <li>Menu</li>
        <li>Whats new?</li>
        <li>Download app</li>
        <li>Contact us</li>
      </ul>
      <div className="nav-right">
        <icons.FaMagnifyingGlass className="nav-icon" />
        <Link to="cart">
          <div>
            <icons.FaCartPlus className="nav-icon" />
          </div>
        </Link>
      </div>
      <button className="login-btn" onClick={() => setShowLogin(true)}>
        Sign-up
      </button>
    </div>
  );
};
Navbar.propTypes = {
  setShowLogin: PropTypes.string.isRequired,
};

export default Navbar;
