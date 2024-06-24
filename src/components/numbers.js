import React from 'react';
import './css/numbers.css';

const Numbers = ({ selectedNumbers, setSelectedNumbers, totalPrice, setTotalPrice }) => { //created 4 props
  const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]; //this is the number arrays

  const dividedNumbers = [];   // declare new variables
  while (numbersArray.length > 0) {     //valued must greater than 0
    dividedNumbers.push(numbersArray.splice(0, 5));
  };    // This is to take an array from numbersArray and break it into 5 per row until reach 20.

  const handleNumberClick = (number) => {   // Define a function named handleNumberClick that takes a parameter called number
    if (selectedNumbers.includes(number)) {    //  check if the clicked numbers we're already in selected.
      setSelectedNumbers(selectedNumbers.filter((n) => n !== number));  //if the click number have been selected then it will remove and back to original state. 
    } else { //executes if the clicked number is not already in the selectedNumbers array.
    // filter use to create a new array that pass the test implemented.
    
      if (selectedNumbers.length < 5) {//length < 5 returns true if fewer than 5 numbers are currently selected, allowing the user to add more numbers to the selection.
        setSelectedNumbers([...selectedNumbers, number]); //if less than 5 numbers are selected, add the new number to the list.
         //... spread operator use to create new array with the existing numbers and the new one.
      } else {  //more than 5 we're selected
        alert(" Cannot select more than 5 numbers.");
      }
    }
  };

  const handleClear = () => { // reset the selected number
    setSelectedNumbers([]);
    setTotalPrice(0); // reset the price to 0 
  };

  const handleCash = () => {
    if ((selectedNumbers.length === 5) && (totalPrice > 0)) { // check if exactly 5 are selected and total price is greater than 0.
      alert(`Numbers selected: ${selectedNumbers.join(', ')}\nTotal Price: $${totalPrice}`); 
      setSelectedNumbers([]); // set this to clear
      setTotalPrice(0); //reset to 0
    } else { 
      alert("Must select 5 numbers and add money to proceed.");
    }
  };

  const handleRandom = () => { //define the random handler function
    const randomNumbers = [];// set null to store random numbers

    while (randomNumbers.length < 5) { // keep looping must set to generate exactly 5.
      const randomNumber = Math.floor(Math.random() * 20) + 1;   //generate expression
      if (!randomNumbers.includes(randomNumber)) {   //check if selected number not included in randomnum array
        randomNumbers.push(randomNumber);  //if the random number is not in the array then it will gonna push it and add in to the array
      }
    }
    setSelectedNumbers(randomNumbers); //update the state of selectedNumbers with the newly generated array.
  };

  return (
    <div className="numbers-content">
        <div className="row-numbers row-1">
            {dividedNumbers[0].map((number) => (
            <button className={selectedNumbers.includes(number) ? "number-button selected" : "number-button"}
                onClick={() => handleNumberClick(number)} >
                {number}
            </button>
            ))}
        </div>

        <div className="row-numbers row-2">
            {dividedNumbers[1].map((number) => (
            <button className={selectedNumbers.includes(number) ? "number-button selected" : "number-button"}
                onClick={() => handleNumberClick(number)}
            >
                {number}
            </button>
            ))}
        </div>

        <div className="row-numbers row-3">
            {dividedNumbers[2].map((number) => (
            <button className={selectedNumbers.includes(number) ? "number-button selected" : "number-button"}
                onClick={() => handleNumberClick(number)}
            >
                {number}
            </button>
            ))}
        </div>

        <div className="row-numbers row-4">
            {dividedNumbers[3].map((number) => (
            <button className={selectedNumbers.includes(number) ? "number-button selected" : "number-button"}
                onClick={() => handleNumberClick(number)}
            >
                {number}
            </button>
            ))}
        </div>
        
      <div className="buttons-row">
        <button className="out-button" onClick={handleCash}>Cash</button>
        <button className="out-button" onClick={handleClear}>Clear</button>
        <button className="out-button" onClick={handleRandom}>Random</button>
      </div>
    </div>
  );
};

export default Numbers;
