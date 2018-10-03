import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import "./Bag.css";
import { addToBag } from "../../ducks/reducer";
import StripeCheckout from 'react-stripe-checkout'

class Bag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 0.00
    };
  }

  componentDidMount() {
    axios.get("/api/getbag").then(res => {
        this.props.addToBag(res.data)
        console.log(res.data);
        res.data[0] ? this.totalBag() : null
    });
  }
  componentDidUpdate(prevProps){
    if(this.props.bag.length !== prevProps.bag.length){
      this.props.bag.length > 0 ? this.totalBag() : this.setState({price: 0.00})
    }
  }

  handleDelete(element) {
    axios
      .delete(`/api/delete/${element}`)
      .then(res => {this.props.addToBag(res.data)
      // this.totalBag()
    });
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
    let reducedTotal = priceArr.reduce((a, b)=>a + b).toFixed(2)
    console.log(reducedTotal, priceArr);
    this.setState({ price: reducedTotal });
  }
  onToken = (token) => {
    token.card = void 0
    axios.post('/api/payment', {token, amount: this.state.price * 100}).then(res => {
        this.props.addToBag([])
    })
}

  // render() {
  //   let bagToDisplay = this.props.bag[0] ? (
  //     this.props.bag.map((e, i) => {
  //       return (
  //         <div>
  //           <img src={e.img_url} alt="" className="bag-img" />
  //           <p>{e.brand}</p>
  //           <p>{e.name}</p>
  //           <p>${e.price}</p>
  //           <button onClick={() => this.handleDelete(e.bag_id)}>Delete</button>
  //         </div>
  //       );
  //     })
  //   ) : (
  //     <div>Go Get Some Stuff Dude...</div>
  //   );
  //   return (
  //     <div>
  //       {bagToDisplay}
  //       <h4>Total: </h4>
  //       <h3>${this.state.price}</h3>
  //       <hr />
  //       <StripeCheckout
  //               name="Jack Threads"
  //               description="Give Me Your Money"
  //               image="https://cdn.shopify.com/s/files/1/2160/1407/files/JT_only_logo_2_48x@2x.png?v=1500308651"
  //               token= {this.onToken}
  //               stripeKey={process.env.REACT_APP_STRIPE_KEY}
  //               amount={this.state.price  * 100}
  //           />
  //     </div>
  //   );
  // }
// }
render() {
  const {sidebarToggle} = this.props;
  const {setToggle} = this.props
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
    <div>Go Get Some Stuff Dude...</div>
  );
  return (
    <div className={sidebarToggle ? "sidebar show-sidebar" : "sidebar"}>
      <button onClick={setToggle}>X</button>
      {bagToDisplay}
      <h4>Total: </h4>
      <h3>${this.state.price}</h3>
      <hr />
      <StripeCheckout
              name="Jack Threads"
              description="Give Me Your Money"
              image="https://cdn.shopify.com/s/files/1/2160/1407/files/JT_only_logo_2_48x@2x.png?v=1500308651"
              token= {this.onToken}
              stripeKey={process.env.REACT_APP_STRIPE_KEY}
              amount={this.state.price  * 100}
          />
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
  { addToBag }
)(Bag);
