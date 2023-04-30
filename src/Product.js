// Product.js
import React from "react";
import Button from './Button';
import './Product.css';

function Product({name, description, price}) {
  const formattedPrice = price.toFixed(2);

  const handleMouseEnter = () => {
    const heading = document.getElementById("product-heading");
    heading.style.backgroundColor = "grey";
  };

  const handleMouseLeave = () => {
    const heading = document.getElementById("product-heading");
    heading.style.backgroundColor = "transparent";
  };

  return (
    <div>
      <h2 id="product-heading"><i>{name}</i></h2>
      <h3>{description}</h3>
      <h4>£{formattedPrice}</h4>
      <Button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Order</Button>
    </div>
  );
}

export default Product;
