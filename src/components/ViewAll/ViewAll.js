import React, { Component } from "react";
import "./ViewAll.css";
import { Link } from "react-router-dom";
import axios from "axios";
import {View} from 'mdbreact';

class ViewAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgs: []
    };
  }

  threeImgs() {
    axios
      .get("/api/threeimgs", {
        product_id: this.props.id,
        color_id: this.props.color_id
      })
      .then(response => {
        this.setState({
          imgs: response.data
        });
      });
  }

  render() {
    const {
      name,
      id,
      brand,
      category,
      color_id,
      details,
      img_id,
      img,
      price,
      subcategory
    } = this.props;

    return (
      <Link to={`/products/${id}/${img_id}`} style={{textDecoration: 'none'}}>
        <div className="ViewAll">
        <div className="product">
        <div className="container">
          <div className="img_holder">
          <img src={img} className="product_img" alt="" />
          </div>
        </div>
        
          <div>
            <p className="brand" id="viewall-p">{brand}</p>
            <p className="name" id="viewall-p">{name}</p>
            <p className="price" id="viewall-p">${price}</p>
          </div>
        </div>
        </div>
      </Link>
    );
  }
}

export default ViewAll;
