import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="home_img">
          <img
            className="falltees"
            src="https://cdn.shopify.com/s/files/1/2160/1407/files/FALL-TEES-JT-MOBILE_900x.jpg?v=1536934327"
            alt=""
          />
          <img
            className="fallforward"
            src="https://cdn.shopify.com/s/files/1/2160/1407/files/CHAMP-FALL-18-MOBILE_900x.jpg?v=1534433479"
            alt=""
          />
        </div>
        <div className="home_img_large">
          <img
            className="falltees_large"
            src="https://cdn.shopify.com/s/files/1/2160/1407/files/FALL-TEES-JT-HOMEPAGE_1512x.jpg?v=1536934315"
            alt=""
          />
          <img
            className="fallforward_large"
            src="https://cdn.shopify.com/s/files/1/2160/1407/files/CHAMP-FALL-18-HOMEPAGE_1512x.jpg?v=1534433464"
            alt=""
          />
        </div>
      </div>
    );
  }
}

export default Home;
