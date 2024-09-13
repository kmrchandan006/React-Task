import React, { useState } from 'react';
import '../index.css'; 

function Counter() {
  const [count, setCount] = useState(0); // Initial state is 0

  const increment = () => setCount(count + 1); // Function to update state
  const decrement = () => setCount(count - 1); // Function to update state

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg shadow-md max-w-xs mx-auto">
      <p className="text-2xl font-bold text-gray-700 mb-4">Count: {count}</p>
      <div className="flex space-x-4">
        <button
          onClick={increment}
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
        >
          Increment
        </button>
        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;
