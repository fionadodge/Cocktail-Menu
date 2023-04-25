import './App.css';
import Product from './Product';

function App() {
  return (
      <><div class="menu_header">
      <h1>Cocktails</h1>
    </div><div class="Column1">
        <Product name='Expresso Martini' description='Double expresso, ice cold with vodka. Kahlua & a dash of vanilla syrup' price={8.30} />
        <Product name='Pornstar Martini' description='Absolute Vanilla vodka, Passoa passionfruit liqueur, passionfruit puree and pineapple & lemon juice. Served with a prosecco shot.' price={8.60} />
        <Product name='Sex on the Beach' description='JJ Whitley vodka, peach schnapps, orange & cranberry juice.' price={7.80} />
        <Product name='Popcorn Old Fashioned' description='Classic Buffalo Trace Bourbon. Old fashioned made with popcorn syrup.' price={8.30} />
        <div class="cocktail_photo">
          <img src="" alt="Cocktail"></img>
          <h2>"A sweet fruity taste knocked back with some bubbles - a must drink"</h2>
          <p>Isabel</p>
          <p>Pornstar Martini</p>
        </div>
      </div><div class="Column2">
        <Product name='Cherry Cuba Libre' description='Cherry rum & Amaretto mixed with lime juice and topped with coca-cola. Served long with a cherry on top.' price={8.30} />
        <Product name='Raspberry Bramble' description='Beefeater gin & Chambord mixed with lemon & sugar, with garnish.' price={8.30} />
        <Product name='Macaroon Clover Club' description='Our twist on the classic. Beefeater gin & raspberry mixed with lemon, macaroon syrup & topped with foam.' price={8.30} />
        <Product name='Amaretto Sour' description='Amaretto, lemon juice &sugar syrup with a frothy top. Swap Amaretto for Buffalo Trace Bourbon for a Whiskey Sour.' price={7.90} />
        <Product name='Classic Mojito' description='Bacardi, lime & mint mixed up with your choice of flavour.' price={7.20} />
      </div></>
  );
}

export default App;
