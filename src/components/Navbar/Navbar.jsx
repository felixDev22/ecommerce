import './Navbar.css';
import { assets } from '../../assets/index';
import { icons } from '../../assets/index';

const Navbar = () => {
  return (
    <div className="nav">
      <img src={assets.logo} alt="logo" className="logo" />
      <ul className="nav-menu">
        <li>menu</li>
        <li>download app</li>
        <li>contact us</li>
      </ul>
      <div className="nav-right">
        <icons.FaMagnifyingGlass className="nav-icon" />
        <div>
          <icons.FaCartPlus className="nav-icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
