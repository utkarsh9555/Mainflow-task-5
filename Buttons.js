import React from 'react';
import './Buttons.css';

const Buttons = ({ handleClick }) => {
  const buttons = [
    '1', '2', '3', '+',
    '4', '5', '6', '-',
    '7', '8', '9', '*',
    'C', '0', '=', '/'
  ];

  return (
    <div className="buttons">
      {buttons.map((btn, index) => (
        <button key={index} onClick={() => handleClick(btn)}>
          {btn}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
