import { assets } from '../../assets';

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-wrapper">
        <div className="footer-left">
          <img src={assets.logo} alt="footer-logo" />
        </div>
        <div className="footer-centre">
          <ul>
            <li>Home</li>
            <li>Whats new?</li>
            <li>Download app</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className="footer-right">
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
