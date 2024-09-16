import React, { useState } from 'react';

function ParentComponent() {
  // State to hold the list of technologies
  const [records, setRecords] = useState([]);

  // State to hold the new technology input value
  const [newTech, setNewTech] = useState('');

  // Function to handle adding a new technology to the list
  const addTech = () => {
    if (newTech.trim() !== '') {
      // Add the new technology to the records list
      setRecords([...records, newTech]);
      // Clear the input field
      setNewTech('');
    }
  };

  return (
    <li className="p-4 bg-blue-50 rounded-lg text-gray-800 border border-blue-300 shadow-md">
      <h3 className="font-semibold text-lg mb-2">
        Dynamically Add Child Components
      </h3>

      {/* Display the list of technologies */}
      <ul className="list-none mb-4">
        {records.map((record, index) => (
          <li key={index} className="text-blue-600 py-1">
            {record}
          </li>
        ))}
      </ul>

      {/* Input to enter new technology */}
      <input
        className="w-full p-2 border rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
        type="text"
        value={newTech}
        onChange={(e) => setNewTech(e.target.value)}
        placeholder="Enter new technology"
      />

      {/* Button to add new technology */}
      <button
        className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
        onClick={addTech}
      >
        Add Child Components
      </button>
    </li>
  );
}

export default ParentComponent;
