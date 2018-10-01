import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <div className="Footer">
      <div className="customerservice" id="maindiv">
        <p className="title">Customer Service</p>
        <p>FAQ</p>
        <p>Size Chart</p>
        <p>Return Policy</p>
        <p>Make A Return</p>
        <p>Privacy Policy</p>
        <p>Contact Us</p>
        <p>AfterPay</p>
      </div>
      <div className="discounts" id="maindiv">
          <p className="title">Discounts</p>
          <p>Military</p>
          <p>First Responder</p>
          <p>Teacher</p>
      </div>
      <div className="stayconnected" id="maindiv">
          <p className="title">Stay Connected</p>
          <p>SIGN UP FOR OUR EMAIL NEWSLETTER TO BE THE FIRST TO KNOW ABOUT SPECIAL PROMOTIONS AND NEW PRODUCT DROPS. PLUS 10% OFF YOUR FIRST ORDER.</p>
          <div className="signup">
          <input type="text" placeholder="Email Address" className="footerinput"/>
          <button className="signupbutton">Sign Up</button>
          </div>
          
      </div>
    </div>
  );
};

export default Footer;
