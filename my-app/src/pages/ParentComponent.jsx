import React, { useState } from 'react';
import './ParentComponent.css';


// A simple child component
const ChildComponent = ({ id }) => {
  return <div>Child Component {id}</div>;
};

const ParentComponent = () => {
  const [children, setChildren] = useState([]);

  // Add a new child component
  const addChild = () => {
    setChildren([...children, { id: children.length + 1 }]);
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <button onClick={addChild}>Add Child</button>

      {/* Render child components dynamically */}
      <div>
        {children.map((child, index) => (
          <ChildComponent key={index} id={child.id} />
        ))}
      </div>
    </div>
  );
};

export default ParentComponent;
