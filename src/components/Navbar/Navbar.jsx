import { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/index';
import { icons } from '../../assets/index';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ setShowLogin }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="nav">
      <Link to="/">
        <img src={assets.logo} alt="logo" className="logo" />
      </Link>
      <ul className={`nav-menu ${menuOpen ? 'show' : ''}`}>
        <a href="#menu">Menu</a>
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
      <div onClick={toggleMenu} className="menu-icon">
        <icons.IoMenu className="menu" />
      </div>
    </div>
  );
};
Navbar.propTypes = {
  setShowLogin: PropTypes.func,
};

export default Navbar;
