import React from "react";
import './image.css';

function Images({src, quote, cocktail}) {

return (
    <><div>
        <img id="cocktail_photo" src={src} alt='Cocktail-picture' height={300} width={200} />
    </div>
    <div id="cocktail_photo_quote"><h2>{quote}</h2></div>
    <div id="cocktail_photo_name"><p>{cocktail}</p></div>
    </>
  );
}

export default Images;