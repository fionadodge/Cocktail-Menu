import React from "react";
import './Button.css';

function Button(props){
  const { id, productId } = props;
  
  const handleMouseEnter = () => {
    const heading = document.getElementById(productId);
    heading.style.backgroundColor = "grey";
  };
  
  const handleMouseLeave = () => {
    const heading = document.getElementById(productId);
    heading.style.backgroundColor = "transparent";
  };
  
  return (
    <div>
      <button class="button" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Order</button>
    </div>
  );
}

export default Button;

