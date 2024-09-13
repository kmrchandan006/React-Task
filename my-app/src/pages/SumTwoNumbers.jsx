import React, { useState } from 'react';
import './SumTwoNumbers.css';

function SumTwoNumbers() {
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [sum, setSum] = useState(0);

  const handleSum = () => {
    setSum(Number(num1) + Number(num2)); // Calculate the sum
    console.log(sum);
  };

  return (
    <div className="App">
      <h1>Sum of Two Numbers</h1>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter first number"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter second number"
      />
      <button onClick={handleSum}>Calculate Sum</button>
      <h2>Sum: {sum}</h2>
      
    </div>
  );
}

export default SumTwoNumbers;
