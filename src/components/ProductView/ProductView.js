import React, { Component } from "react";
import axios from "axios";
import "./ProductView.css";
import Bag from "../Bag/Bag";
import { addToBag } from "../../ducks/reducer";
import { connect } from "react-redux";

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
      imgs: [],
      size: "S",
      quantity: 1
    };
  }

  componentDidMount() {
    axios
      .get(
        `/api/product?id=${this.props.match.params.id}&img=${
          this.props.match.params.img
        }`
      )
      .then(response => {
        this.setState({
          product: response.data,
          displayImg: response.data[0].img_url,
          name: response.data[0].name,
          price: response.data[0].price,
          brand: response.data[0].brand,
          product_id: response.data[0].product_id,
          img_id: response.data[0].img_id,
          color_id: response.data[0].color_id
        });
      });
  }

  addToBag() {
    axios
      .post("/api/addtocart", {
        product_id: this.state.product_id,
        img_id: this.state.img_id,
        color_id: this.state.color_id,
        size: this.state.size,
        quantity: this.state.quantity
      })
      .then(response => { 
        this.props.addToBag(response.data);
      })
      .catch(()=>{
        alert("You must be logged in to add to cart!")
      })
  }
  handleSize(val){
    this.setState({size: val})
  }
  handleQuantity(val){
    let numVal = Number(val)
    this.setState({quantity: numVal})
  }
  render() {
    return (
      <div className="ProductView">
        <img className="displayimg" src={this.state.displayImg} alt="" />
        <div className="tags">
          <p className="product-brand" id="thep">{this.state.brand}</p>
          <p className="product-name" id="thep">{this.state.name}</p>
          <p className="product-price" id="thep">${this.state.price}</p>
          <select name="size" id="" onChange={(e)=>{this.handleSize(e.target.value)}}>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          </select>
          <select name="quantity" id="" onChange={(e)=>{this.handleQuantity(e.target.value)}}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
          </select>
          <div className="buttondiv">
          <button className="bagbutton" onClick={() => this.addToBag()}>
            Add to Bag
          </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { addToBag }
)(ProductView);
