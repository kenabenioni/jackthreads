import React, { Component } from 'react';
import routes from './routes'
import './App.css';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Bag from './components/Bag/Bag';
import axios from 'axios';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      sidebarToggle: false,
      user: {},
      name: ""
    }
    this.setToggle = this.setToggle.bind(this)
  }
  setToggle(){
    this.setState({sidebarToggle: !this.state.sidebarToggle})
  }
  async componentDidMount() {
    let res = await axios.get("/api/user-data");
    this.setState({ user: res.data, name: res.data.user_name });
  }
  login() {
    let { REACT_APP_DOMAIN, REACT_APP_CLIENT_ID } = process.env;

    let url = `${encodeURIComponent(window.location.origin)}/auth/callback`;

    window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${url}&response_type=code`;
  }



  render() {
    return (
      <div className="App">
      <div className={this.state.sidebarToggle ? 'overlay visible' : 'overlay hidden'} >
      </div>
      <Nav 
      setToggle={this.setToggle}/>
        {routes}
      <Footer/>
      <Bag
      sidebarToggle={this.state.sidebarToggle}
      setToggle={this.setToggle}/>
      </div>
    );
  }
}

export default App;




