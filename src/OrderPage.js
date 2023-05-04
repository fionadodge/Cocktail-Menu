import React, { useState } from 'react';

function OrderPage({ orderedCocktails }) {
  const [cocktails, setCocktails] = useState(orderedCocktails);

  function addCocktail(cocktail) {
    setCocktails([...cocktails, cocktail]);
  }

  function handleBack() {
    // Go back to the main menu
    // You can use react-router-dom or any other method to implement this
  }

  return (
    <div>
      <h1>Your Order</h1>
      <ul>
        {cocktails.map((cocktail, index) => (
          <li key={index}>{cocktail.name}</li>
        ))}
      </ul>
      <button onClick={handleBack}>Back to Menu</button>
    </div>
  );
}

export default OrderPage;


