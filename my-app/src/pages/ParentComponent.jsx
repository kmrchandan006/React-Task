import React, { useState } from 'react';
import '../index.css'; 
// A simple child component
const ChildComponent = ({ id }) => {
  return (
    <div className="p-4 bg-gray-200 rounded-lg shadow-sm mb-2">
      Child Component {id}
    </div>
  );
};

const ParentComponent = () => {
  const [children, setChildren] = useState([]);

  // Add a new child component
  const addChild = () => {
    setChildren([...children, { id: children.length + 1 }]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Parent Component</h2>
      <button
        onClick={addChild}
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
      >
        Add Child
      </button>
      <div className="mt-4 space-y-2">
        {children.map((child) => (
          <ChildComponent key={child.id} id={child.id} />
        ))}
      </div>
    </div>
  );
};

export default ParentComponent;
