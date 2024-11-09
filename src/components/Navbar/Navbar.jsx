import './Navbar.css';
import { assets } from '../../assets/index';
import { icons } from '../../assets/index';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ setShowLogin }) => {
  return (
    <div className="nav">
      <Link to="/">
        <img src={assets.logo} alt="logo" className="logo" />
      </Link>
      <ul className="nav-menu">
        <a href="#menu">Menu</a>
        <a href="#">Whats new?</a>
        <a href="#">Download app</a>
        <a href="#footer">Contact us</a>
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
  setShowLogin: PropTypes.func,
};

export default Navbar;
