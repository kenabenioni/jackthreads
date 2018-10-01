import React, { Component } from "react";
import axios from "axios";
import {connect} from 'react-redux';
import './Bag.css';
import {addAllToBag} from '../../ducks/reducer';

class Bag extends Component {
  constructor(props) {
    super(props); 
      this.state = {

      };
    
  }

  componentDidMount(){
      axios.get('/api/getbag').then((res)=>this.props.addAllToBag(res.data))
  }

  handleDelete(element){
      axios.delete(`/api/delete/${element}`).then((res)=>this.props.addAllToBag(res.data))
  }

  render() {
      console.log(this.props.bag);
      let bagToDisplay = 
      this.props.bag[0] ? 
      this.props.bag.map((e, i)=>{
          return (
              <div>
                  
                  <img src={e.img_url} alt="" className="bag-img"/>
                  <p>{e.brand}</p>
                  <p>{e.name}</p>
                  <p>${e.price}</p>
                  <button onClick={()=>this.handleDelete(e.bag_id)}>Delete</button>
              </div>
          )
      })
      : <div>
          Loading...
      </div>
    return (
        <div>
            {bagToDisplay}
            <hr/>
            <button>Checkout</button>
        </div>
    )
  }
}

function mapStateToProps(state){
    return {
        bag: state.bag
    }
}

export default connect(mapStateToProps, {addAllToBag})(Bag);
