//App.js
import './App.css';
import Product from './Product';
import Images from './Image';
import Pornstar from './images/pornstar.jpg';
import Footer from './Footer';

function App() {

  const orderedCocktails = JSON.parse(localStorage.getItem('orderedCocktails')) || [];
  localStorage.setItem('orderedCocktails', JSON.stringify(orderedCocktails));

  return (
    <><div className="menu_header">
      <h1>Cocktails</h1>
    </div>
    <div className ="Main_Menu">
      <div className ="Column1">
        <Product id="expresso-martini" name='Expresso Martini' description='Double expresso, ice cold with vodka. Kahlua & a dash of vanilla syrup' price={8.30} />
        <Product id="pornstar-martini" name='Pornstar Martini' description='Absolute Vanilla vodka, Passoa passionfruit liqueur, passionfruit puree and pineapple & lemon juice. Served with a prosecco shot.' price={8.60} />
        <Product id="sex-on-the-beach" name='Sex on the Beach' description='JJ Whitley vodka, peach schnapps, orange & cranberry juice.' price={7.80} />
        <Product id="popcorn-old-fashioned" name='Popcorn Old Fashioned' description='Classic Buffalo Trace Bourbon. Old fashioned made with popcorn syrup.' price={8.30} />
        <div style={{position: "relative"}}>
          <Images id="cocktail_photo" src={Pornstar} quote="A sweet fruity taste knocked back with some bubbles - a must drink" cocktail="Pornstar Martini" />
        </div>
      </div>
      <div className="Column2">
        <Product id="cherry-cuba-libre" name="Cherry Cuba Libre" description='Cherry rum & Amaretto mixed with lime juice and topped with coca-cola. Served long with a cherry on top.' price={8.30} />
        <Product id="raspberry-bramble" name="Raspberry Bramble" description='Beefeater gin & Chambord mixed with lemon & sugar, with garnish.' price={8.30} />
        <Product id="macaroon-clover-club" name="Macaroon Clover Club" description='Our twist on the classic. Beefeater gin & raspberry mixed with lemon, macaroon syrup & topped with foam.' price={8.30} />
        <Product id="amaretto-sour" name="Amaretto Sour" description="Amaretto, lemon juice &sugar syrup with a frothy top. Swap Amaretto for Buffalo Trace Bourbon for a Whiskey Sour." price={7.90} />
        <Product id="classic-mojito" name='Classic Mojito' description='Bacardi, lime & mint mixed up with your choice of flavour.' price={7.20} />
      </div>
    </div>
    <div>
      <Footer /> 
    </div></>
  );
}

export default App;
