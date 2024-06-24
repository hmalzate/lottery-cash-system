import React from 'react';
import './css/numselected.css';

const Numselected = ({selectedNumbers, totalPrice}) => {
    if (!selectedNumbers) { //check if the number is not define
        return null;
    }

    //css style
    //map will go through each number iterates over each number in the selectedNumbers array.
  
    return (
        <div className ="selected-numbers-container">
            <div className = "numselected"> Numbers Selected: {selectedNumbers.map((number, index) =>( 
            <span> SELECTED: {number}</span>
            ))}
            </div>

            <div className = "numselected">
                <span className = "total-price"> Total: ${totalPrice}</span>
            </div>
        </div>
    );
};
export default Numselected;