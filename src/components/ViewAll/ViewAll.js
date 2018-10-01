import React, { Component } from "react";
import './ViewAll.css';
import { Link } from "react-router-dom";
import axios from 'axios';

class ViewAll extends Component {
  constructor(props) {
    super(props) 
      this.state = {
        imgs: []
      }
  }

  threeImgs(){
    axios.get('/api/threeimgs', {product_id: this.props.id, color_id: this.props.color_id})
    .then(response=>{
      this.setState({
        imgs: response.data
      })
    })
  }



  render(){
    
    const { name, id, brand, category, color_id, details, img_id, img, price, subcategory } = this.props;
    
    return (
      <Link to={`/products/${id}/${img_id}`}>
      <div className="ViewAll">
      <img src={img} className="product_img" alt=""/>
      <div>
          <p>{brand}</p>
          <p>{name}</p>
          <p>${price}</p>
      </div>
      </div>
      </Link>
    );
  }
}

export default ViewAll;