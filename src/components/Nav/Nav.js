import React, {Component} from "react";
import "./Nav.css";
import axios from 'axios';
import { Link } from "react-router-dom";

class Nav extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: {}
    }
  }
  async componentDidMount(){
    let res = await axios.get('/api/user-data')
    this.setState({user: res.data})
  }

  login(){
    let {REACT_APP_DOMAIN, REACT_APP_CLIENT_ID} = process.env;

    let url = `${encodeURIComponent(window.location.origin)}/auth/callback`

    window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${url}&response_type=code`
  }


  render (){
    return (
      <div className="nav">
        <div className="nav-small">
          <button>Menu</button>
          <div className="logotextdiv_small">
          <img 
            src="https://cdn.shopify.com/s/files/1/2160/1407/files/JT_Full_Logo_RGB_75x@2x.png?v=1500308626"
          className="logotext-small"
            alt=""
          />
          </div>
          <div className="searchbag">
          <button>Search</button>
          <button>Bag</button>
          </div>
        </div>
        <div className="nav-full">
          <Link to={"/"}>
            <img
              src="https://cdn.shopify.com/s/files/1/2160/1407/files/JT_Full_Logo_RGB_75x@2x.png"
              alt=""
            />
          </Link>
          <button>New</button>
          <Link to={"/collections/all-clothing"}>
            <button>Clothing</button>
          </Link>
          <button>Shoes</button>
          <button>Accessories</button>
          <button>Sale</button>
          <input type="text" placeholder="Search" />
            <button onClick={this.login}>Account</button>
          <button>Bag</button>
          <hr />
        </div>
      </div>
    );
  }
};

export default Nav;
