import React, { Component } from "react";
import "./Nav.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Sidebar from "react-sidebar";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      sidebarOpen: false
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
  async componentDidMount() {
    let res = await axios.get("/api/user-data");
    this.setState({ user: res.data });
  }

  login() {
    let { REACT_APP_DOMAIN, REACT_APP_CLIENT_ID } = process.env;

    let url = `${encodeURIComponent(window.location.origin)}/auth/callback`;

    window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${url}&response_type=code`;
  }
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  render() {
    const {setToggle} = this.props
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
          <div className="navleft">
            <Link to={"/"}>
              <img
                className="logotext"
                src="https://cdn.shopify.com/s/files/1/2160/1407/files/JT_Full_Logo_RGB_75x@2x.png"
                alt=""
              />
            </Link>
            <div className="leftbuttons">
              <button className="left-button" id="allbuttons">
                New
              </button>
              <Link to={"/collections/all-clothing"}>
                <button className="left-button" id="allbuttons">
                  Clothing
                </button>
              </Link>
              <button className="left-button" id="allbuttons">
                Shoes
              </button>
              <button className="left-button" id="allbuttons">
                Accessories
              </button>
              <button className="left-button" id="allbuttons">
                Sale
              </button>
            </div>
          </div>
          <div className="navright">
            <input type="text" placeholder="Search" className="navinput" />
            <button onClick={this.login} id="allbuttons">
              Login
            </button>
            
              <button id="allbuttons" onClick={setToggle}>Bag</button>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default Nav;
