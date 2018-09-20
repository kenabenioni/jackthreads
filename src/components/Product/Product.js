import React, { Component } from 'react';
import axios from 'axios';
import './Product.css';
import ViewAll from '../ViewAll/ViewAll';

class Products extends Component {
    constructor(props){
        super(props)
        this.state = {
            allProducts: []
        }
    }

    componentDidMount(){
        axios.get('/api/all-products')
        .then(response=>{
            this.setState({allProducts: response.data})
        })
    }

  render() {
      
      let productsToDisplay = this.state.allProducts.map((e, i)=> {
          return (
              <ViewAll
               id = {e.product_id}
               name = {e.name}
               brand = {e.brand}
               category = {e.category}
               subcategory = {e.subcategory}
               color_id = {e.color_id}
               details = {e.details}
               display_img = {e.display_img}
               img_id = {e.img_id}
               img = {e.img_url}
               price = {e.price}
              />
              
          )
      })
    
    return (
      <div className="Products">
      {productsToDisplay}
      </div>
    );
  }
}

export default Products;