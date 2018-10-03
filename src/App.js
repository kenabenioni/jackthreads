import React, { Component } from 'react';
import routes from './routes'
import './App.css';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Bag from './components/Bag/Bag';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      sidebarToggle: false
    }
    this.setToggle = this.setToggle.bind(this)
  }
  setToggle(){
    this.setState({sidebarToggle: !this.state.sidebarToggle})
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




