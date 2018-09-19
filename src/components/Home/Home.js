import React, { Component } from 'react';
import './Home.css'

class Home extends Component {
  render() {
    return (
      <div className="Home">
      <div className="home_img">
        <img  className='falltees' src="https://cdn.shopify.com/s/files/1/2160/1407/files/FALL-TEES-JT-HOMEPAGE_1728x.jpg?v=1536934315" alt=""/>
        <img className='fallforward' src="https://cdn.shopify.com/s/files/1/2160/1407/files/CHAMP-FALL-18-HOMEPAGE_1728x.jpg?v=1534433464" alt=""/>
      </div>
      </div>
    );
  }
}

export default Home;
