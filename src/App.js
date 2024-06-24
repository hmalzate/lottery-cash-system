import React, { useState } from 'react';
import Header from './components/header';
import Moneybuttons from './components/moneybuttons';
import Numbers from './components/numbers';
import Numselected from './components/numselected';
import './App.css';

const App = () => {
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  //return statement
  return (
    <div className="app-container">
      <Header />
      <div className="numbers-buttons-container">
        <div className="moneybuttons-container">
          <Moneybuttons setTotalPrice={setTotalPrice} selectedNumbers={selectedNumbers} />
        </div>
        <div className="numbers-container">
          <Numbers selectedNumbers={selectedNumbers} totalPrice={totalPrice} setSelectedNumbers={setSelectedNumbers} setTotalPrice={setTotalPrice} />
        </div>
        <div className="numselected-container">
          <Numselected selectedNumbers={selectedNumbers} totalPrice={totalPrice} />
        </div>
      </div>
    </div>
  );
};

export default App;
