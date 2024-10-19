import './Navbar.css';
import { assets } from '../../assets/index';
import { icons } from '../../assets/index';

const Navbar = (setShowLogin) => {
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
        <div>
          <icons.FaCartPlus className="nav-icon" />
        </div>
      </div>
      <button className="login-btn">Log-in</button>
    </div>
  );
};

export default Navbar;
