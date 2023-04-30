import React, { useState } from 'react';
import './Button.css';
import name from './Product';

function Button(props) {
  const { name } = props;
  const [productId, setProductId] = useState('');

  const handleClick = () => {
    const selectedProducts = JSON.parse(localStorage.getItem('selectedProducts')) || [];
    const index = selectedProducts.indexOf(name);
    if (index > -1) {
      selectedProducts.splice(index, 1);
    } else {
      selectedProducts.push(name);
    }
    localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
    const selectedProductNames = selectedProducts.map(productId => {
      const product = document.getElementById(productId);
      return product ? product.getAttribute('data-name') : '';
    });
    console.log(`Selected cocktails: ${selectedProductNames}`);
  };

  const handleMouseEnter = () => {
    setProductId(name);
    const heading = document.getElementById(productId);
    if (heading) {
      heading.style.backgroundColor = 'grey';
    }
  };

  const handleMouseLeave = () => {
    setProductId('');
    const heading = document.getElementById(productId);
    if (heading) {
      heading.style.backgroundColor = 'transparent';
    }
  };

  return (
    <div>
      <button
        id={name}
        className="button"
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        data-name={props.name} // add data-name attribute with the value of name prop
      >
        Order
      </button>
    </div>
  );
}

export default Button;
