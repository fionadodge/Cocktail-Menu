// Product.js
import React from "react";
import ReactDOM from "react-dom";
import Button from './Button';
import OrderPage from "./OrderPage";
import './Product.css';

function Product({id, name, description, price}) {
  const formattedPrice = price.toFixed(2);

  function handleClick() {
    const orderedCocktails = JSON.parse(localStorage.getItem('orderedCocktails')) || [];
    orderedCocktails.push({id, name});
    localStorage.setItem('orderedCocktails', JSON.stringify(orderedCocktails));
    console.log(`Selected cocktail: ${name}`);

      // Navigate to the order page
    ReactDOM.render(<OrderPage orderedCocktails={orderedCocktails} />, document.getElementById('root'));
  }

  return (
    <div>
      <h2 id="product-heading"><i>{name}</i></h2>
      <h3>{description}</h3>
      <h4>£{formattedPrice}</h4>
      <Button id={id} onClick={handleClick} name={name} /> <br/>
    </div>
  );
}


export default Product;
