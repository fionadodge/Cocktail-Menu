import React from "react";

function Product ({name, description, price}){
    const formattedPrice = price.toFixed(2);
    
    return (
        <div>
            <h2><i>{name}</i></h2>
            <h3>{description}</h3>
            <h4>£{formattedPrice}</h4>
        </div>
    );
}

export default Product;