import React, { Component } from 'react';
import routes from './routes'
import './App.css';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav/>
      <div>
        {routes}
      </div>
      <Footer/>
      </div>
    );
  }
}

export default App;
