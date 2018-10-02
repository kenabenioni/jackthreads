import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import "./Bag.css";
import { addAllToBag } from "../../ducks/reducer";

class Bag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 0.00
    };
  }

  componentDidMount() {
    axios.get("/api/getbag").then(res => {
        this.props.addAllToBag(res.data)
        this.totalBag();
    });
  }

  handleDelete(element) {
    axios
      .delete(`/api/delete/${element}`)
      .then(res => this.props.addAllToBag(res.data));
  }
  totalBag() {
    console.log("fired");
    let priceArr = [];
    let total = 0;
    console.log(this.props.bag);
    this.props.bag.forEach((e, i) => {
      let price = Number(e.price);
      priceArr.push(price);
    });
    let reducedTotal = priceArr.reduce((a, b)=>a + b)
    console.log(reducedTotal, priceArr);
    this.setState({ price: reducedTotal });
  }

  render() {
    console.log(this.state);
    let bagToDisplay = this.props.bag[0] ? (
      this.props.bag.map((e, i) => {
        return (
          <div>
            <img src={e.img_url} alt="" className="bag-img" />
            <p>{e.brand}</p>
            <p>{e.name}</p>
            <p>${e.price}</p>
            <button onClick={() => this.handleDelete(e.bag_id)}>Delete</button>
          </div>
        );
      })
    ) : (
      <div>Loading...</div>
    );
    return (
      <div>
        {bagToDisplay}
        <h4>Total: </h4>
        <h3>${this.state.price}</h3>
        <hr />
        <button>Checkout</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    bag: state.bag
  };
}

export default connect(
  mapStateToProps,
  { addAllToBag }
)(Bag);
