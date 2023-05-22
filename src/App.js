import React, { useState } from 'react';
import './App.css';
import { Chainlink } from 'dev3-sdk';

const ethSDK = Chainlink.instance('https://rpc.payload.de', Chainlink.PriceFeeds.ETH);
const result = await ethSDK.getFromOracle(ethSDK.feeds.LINK_USD);
let LINK_USD = result.formattedAnswer ? result.formattedAnswer : parseInt(result.answer._hex, 16) / 100000000;

function App() {
  const [showResult, setShowResult] = useState(false);

  const handleClick = () => {
    setShowResult(true);
  };

  return (
    <div className="center">
      <button onClick={handleClick}>FETCH LINK PRICE</button>
      {showResult && <p>LINK/USD: {LINK_USD}</p>}
    </div>
  );
}

export default App;
