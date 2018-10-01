import React, { Component } from 'react';
import axios from 'axios';
import './ProductView.css'
import Bag from '../Bag/Bag'
import { addToBag } from '../../ducks/reducer';
import {connect} from 'react-redux';


class ProductView extends Component {
  constructor(props) {
    super(props);
    this.state = {
     product: [],
     displayImg: "",
     name: "",
     price: "",
     brand: "",
     product_id: 1,
     img_id: 1,
     color_id: 1,
     imgs: []
    };
  }

  componentDidMount(){
    axios.get(`/api/product?id=${this.props.match.params.id}&img=${this.props.match.params.img}`)
    .then(response=>{
      this.setState({
        product: response.data, 
        displayImg: response.data[0].img_url, 
        name: response.data[0].name,
        price: response.data[0].price,
        brand: response.data[0].brand,
        product_id: response.data[0].product_id,
        img_id: response.data[0].img_id,
        color_id: response.data[0].color_id

      })
    })
  }


  addToBag(){
    axios.post('/api/addtocart', {product_id: this.state.product_id, img_id: this.state.img_id, color_id: this.state.color_id})
    .then(response=>{
      this.props.addToBag(response.data)
    })
  }
 
  render() {
    return (
      <div className="ProductView">
        <img className="displayimg" src={this.state.displayImg} alt=""/>
        <p>{this.state.brand}</p>
        <p>{this.state.name}</p>
        <p>${this.state.price}</p>
        <button className="bagbutton" onClick={()=>this.addToBag()}>Add to Bag</button>
      </div>
    );
  }
}


export default connect(null, {addToBag})(ProductView);