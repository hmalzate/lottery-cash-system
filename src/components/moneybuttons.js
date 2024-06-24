import React from 'react';
import './css/moneybuttons.css'; 
import lottery from './icons/lottery.png';

const Moneybuttons = ({ selectedNumbers, setTotalPrice }) => { 

  const addMoney = (price) => {// defining the function of addmoney that called price
    if(selectedNumbers.length < 5) { //check length is less than 5
      alert("You have to select 5 numbers.");
    } else { //is length is exactly 5
      setTotalPrice(prevTotalPrice => prevTotalPrice + price); 
      // set totalprice function takes a callback function as an argument
      //the callback function takes the previous total price and add the new to it.
    }
  };

  return (
    <div className="button-container">
        <div className='icon'>
            <img src={lottery} alt='Lottery'></img>
        </div>

        <div className='first-row'>
            <button className="button" onClick={() => addMoney(1)}>$1</button>
            <button className="button" onClick={() => addMoney(5)}>$5</button>
        </div>
        
        <div className='second-row'>
            <button className="button" onClick={() => addMoney(10)}>$10</button>
            <button className="button" onClick={() => addMoney(20)}>$20</button>
        </div>
    </div>
  );
};
//onClick event handler it calls the addMoney function with a specific argument representing the amount of money to add.
export default Moneybuttons;
