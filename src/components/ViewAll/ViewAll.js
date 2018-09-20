import React from "react";
import './ViewAll.css';
import { Link } from "react-router-dom";

const ViewAll = props => {
  console.log(props);
  const { name, id, brand, category, color_id, details, img_id, img, price, subcategory } = props;
  return (
    <Link to={"/products"}>
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
};

export default ViewAll;