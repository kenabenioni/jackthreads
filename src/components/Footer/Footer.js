import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <div className="Footer">
      <div className="customerservice" id="maindiv">
        <p className="title" id="footer-p">Customer Service</p>
        <p id="footer-p">FAQ</p>
        <p id="footer-p">Size Chart</p>
        <p id="footer-p">Return Policy</p>
        <p id="footer-p">Make A Return</p>
        <p id="footer-p">Privacy Policy</p>
        <p id="footer-p">Contact Us</p>
        <p id="footer-p">AfterPay</p>
      </div>
      <div className="discounts" id="maindiv">
          <p id="footer-p" className="title">Discounts</p>
          <p id="footer-p">Military</p>
          <p id="footer-p">First Responder</p>
          <p id="footer-p">Teacher</p>
      </div>
      <div className="stayconnected" id="maindiv">
          <p id="footer-p" className="title">Stay Connected</p>
          <p id="footer-p">SIGN UP FOR OUR EMAIL NEWSLETTER TO BE THE FIRST TO KNOW ABOUT SPECIAL PROMOTIONS AND NEW PRODUCT DROPS. PLUS 10% OFF YOUR FIRST ORDER.</p>
          <div className="signup">
          <input type="text" placeholder="Email Address" className="footerinput"/>
          <button className="signupbutton">Sign Up</button>
          </div>
          
      </div>
    </div>
  );
};

export default Footer;
