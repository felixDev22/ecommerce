import { assets } from '../../assets';
import './footer.css';

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-wrapper">
        <div className="footer-left">
          <img src={assets.logoWhite} alt="footer-logo" />
          <p className="footer-copy">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
        </div>
        <div className="footer-centre">
          <h4>QUICK LINKS</h4>
          <ul>
            <li>Home</li>
            <li>Whats new?</li>
            <li>Download app</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className="footer-right">
          <h4>GET IN TOUCH</h4>
          <ul>
            <li>+254 700 000 001</li>
            <li>info@GoodFoods.com</li>
          </ul>
        </div>
      </div>
      <hr className="line"></hr>
      <p className="copyright">All Copyright reserved. | 2024 </p>
    </div>
  );
};

export default Footer;
