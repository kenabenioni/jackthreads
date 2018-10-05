import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import "./Bag.css";
import { addToBag } from "../../ducks/reducer";
import StripeCheckout from "react-stripe-checkout";

class Bag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 0.0,
      loggedIn: false
    };
  }

  componentDidMount() {
    axios.get("/api/getbag").then(res => {
      this.props.addToBag(res.data);
      console.log(res.data);
      this.setState({ loggedIn: true });
      res.data[0] ? this.totalBag() : null;
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.bag.length !== prevProps.bag.length) {
      this.props.bag.length > 0
        ? this.totalBag()
        : this.setState({ price: 0.0 });
    }
  }
  login() {
    let { REACT_APP_DOMAIN, REACT_APP_CLIENT_ID } = process.env;

    let url = `${encodeURIComponent(window.location.origin)}/auth/callback`;

    window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${url}&response_type=code`;
  }

  handleDelete(element) {
    axios.delete(`/api/delete/${element}`).then(res => {
      this.props.addToBag(res.data);
      // this.totalBag()
    });
  }
  totalBag() {
    let priceArr = [];
    let total = 0;
    this.props.bag.forEach((e, i) => {
      let price = Number(e.price);
      let quantity = e.quantity;
      let priceAndQuantity = price * quantity;
      priceArr.push(priceAndQuantity);
    });
    let reducedTotal = priceArr.reduce((a, b) => a + b).toFixed(2);
    this.setState({ price: reducedTotal });
  }
  onToken = token => {
    token.card = void 0;
    axios
      .post("/api/payment", { token, amount: this.state.price * 100 })
      .then(res => {
        this.props.addToBag([]);
      });
  };

  render() {
    const { sidebarToggle } = this.props;
    const { setToggle } = this.props;
    let bagToDisplay = this.props.bag[0] ? (
      this.props.bag.map((e, i) => {
        return (
          <div className="bagitem">
            <div>
              <img src={e.img_url} alt="" className="bag-img" />
            </div>
            <div className="tags">
              <p className="bag-brand">{e.brand}</p>
              <p className="bag-name">{e.name}</p>
              <p className="bag-price">${(e.price * e.quantity).toFixed(2)}</p>
              <select name="" className="bag-size">
                <option value="">{e.size}</option>
                {e.size === "S" ? null : <option value="S">S</option>}
                {e.size === "M" ? null : <option value="M">M</option>}
                {e.size === "L" ? null : <option value="L">L</option>}
                {e.size === "XL" ? null : <option value="XL">XL</option>}
              </select>
              {/* <select name="" id="">
          <option value="">{e.quantity}</option>
          </select> */}
              <div className="quan">
                <input
                  type="number"
                  min="1"
                  max="12"
                  value={e.quantity}
                  className="quant-input"
                />
              </div>

              <button
                onClick={() => this.handleDelete(e.bag_id)}
                className="remove"
              >
                Remove
              </button>
            </div>
            <hr />
          </div>
        );
      })
    ) : (
      <div>Go Get Some Stuff Dude...</div>
    );
    return (
      <div className={sidebarToggle ? "sidebar show-sidebar" : "sidebar"}>
      
      {this.state.loggedIn ? (

      <div>
        <div className="toptop">
          <div className="topbar">
            <div className="xbutton">
              <button onClick={setToggle} className="thex">
                X
              </button>
            </div>
            <h4 className="yourbag">Your Bag</h4>
          </div>
          <div className="totalprice">
            <h4>Total: </h4>
            <h3>${this.state.price}</h3>
          </div>
          <div className="stripe">
            <StripeCheckout
              name="Jack Threads"
              description="Give Me Your Money"
              image="https://cdn.shopify.com/s/files/1/2160/1407/files/JT_only_logo_2_48x@2x.png?v=1500308651"
              token={this.onToken}
              stripeKey={process.env.REACT_APP_STRIPE_KEY}
              amount={this.state.price * 100}
            />
          </div>
        </div>
        {bagToDisplay}
      </div>
      ) : (
        <div>
          <button onClick={setToggle} className="thex">
                  X
                </button>
          <p>Please Log in To View Your Cart</p>
          <button onClick={this.login} id="allbuttons">Login</button>
        </div>
        
      )}
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
