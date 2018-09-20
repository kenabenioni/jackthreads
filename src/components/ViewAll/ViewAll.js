import React from "react";
import './ViewAll.css';

const ViewAll = props => {
  const { name, id, brand, category, color_id, details, img_id, img, price, subcategory } = props;
  
  return (
    <div className="ViewAll">
    <img src={img} className="product_img" alt=""/>
    <div>
        <p>{brand}</p>
        <p>{name}</p>
        <p>${price}</p>
    </div>
    </div>
  );
};

export default ViewAll;