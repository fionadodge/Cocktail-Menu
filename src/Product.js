// Product.js
import React from "react";
import Button from './Button';
import './Product.css';

function Product({id, name, description, price}) {
  const formattedPrice = price.toFixed(2);

  return (
    <div>
      <h2 id="product-heading"><i>{name}</i></h2>
      <h3>{description}</h3>
      <h4>£{formattedPrice}</h4>
      <Button id={id}  />
    </div>
  );
}

export default Product;
