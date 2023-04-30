import React from "react";
import './Button.css';

function Button(props){
  const { id, productId } = props;
  
  const handleClick = () => {
    const selectedProducts = JSON.parse(localStorage.getItem('selectedProducts')) || [];
    const index = selectedProducts.indexOf(id);
    if (index > -1) {
      selectedProducts.splice(index, 1);
    } else {
      selectedProducts.push(id);
    }
    localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
  };

  const handleMouseEnter = () => {
    document.addEventListener("DOMContentLoaded", () => {
      const heading = document.getElementById(productId);
      if (heading) {
        heading.style.backgroundColor = "grey";
      }
    });
  };
  
  const handleMouseLeave = () => {
    document.addEventListener("DOMContentLoaded", () => {
      const heading = document.getElementById(productId);
      if (heading) {
        heading.style.backgroundColor = "transparent";
      }
    });
  };
  
  return (
    <div>
        <button id={id} className="button" onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Order</button>
    </div>
  );
}

export default Button;

