import React, { useState } from 'react';

function SumTwoNumbers() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [sum, setSum] = useState(0);
  const [isEnabled, setIsEnabled] = useState(true); // State to manage button enable/disable

  const handleSum = () => {
    setSum(Number(num1) + Number(num2)); // Calculate the sum
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Sum of Two Numbers</h1>
      <div className="space-y-4">
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Enter first number"
          className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Enter second number"
          className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex space-x-4">
          <button
            onClick={handleSum}
            disabled={!isEnabled} // Disable the button based on isEnabled state
            className={`px-6 py-2 ${isEnabled ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-400 cursor-not-allowed'} text-white font-semibold rounded-lg transition`}
          >
            Calculate Sum
          </button>
          <button
            onClick={() => setIsEnabled(true)} // Enable the Calculate Sum button
            className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition"
          >
            Enable
          </button>
          <button
            onClick={() => setIsEnabled(false)} // Disable the Calculate Sum button
            className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition"
          >
            Disable
          </button>
        </div>
        <h2 className="text-2xl font-medium text-gray-700 mt-4">Sum: {sum}</h2>
      </div>
    </div>
  );
}

export default SumTwoNumbers;
