import React, { Component } from 'react';
import axios from 'axios';

class Clothing extends Component {
    constructor(props){
        super(props)
        this.state = {
            clothing: []
        }
    }

    componentDidMount(){
        axios.get('/api/all-clothing')
        .then(response=>{
            this.setState({clothing: response.data})
        })
    }

  render() {
    return (
      <div className="Clothing">
      
      </div>
    );
  }
}

export default Clothing;