import { assets } from "../../assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-wrapper">
        <div className="footer-left">
          <img src={assets.logo} alt="footer-logo"/>
        </div>
        <div className="footer-centre"></div>
        <div className="footer-right"></div>
      </div>
    </div>
  );
};

export default Footer;
