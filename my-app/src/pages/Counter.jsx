import React, { useState } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0); // Initial state is 0

  const increment = () => setCount(count + 1); // Function to update state

  const decrement = () => setCount(count - 1); // Function to update state
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Increment</button>
    </div>
  );
}

export default Counter;
