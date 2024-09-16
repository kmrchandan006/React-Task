import React from 'react';
import ShowAndHide from './ShowAndHide';
import SumTwoNumbers from './SumTwoNumbers';
import Counter from './Counter';
import ArraySerch from './ArraySerch';
import ParentComponent from './ParentComponent';
import { useNavigate } from 'react-router-dom';
import Enable from './Enable';
import CustomerTable from './CustomerTable';
import DragDropTask from './DragDropTask';
import Example from './Example';
import '../index.css'; // Tailwind CSS should be included here

function HomePage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/HomePage');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Home Page</h2>

      <div>
        <Example /> {/* The example component with typing animation */}
      </div>

      <div className="grid grid-cols-1 gap-6 w-full max-w-3xl">
        {/* Other components rendered on the home page */}
        <SumTwoNumbers />
        <ShowAndHide />
        <Counter />
        <ArraySerch />
        <ParentComponent />
        <CustomerTable />
        <Enable />
        <DragDropTask />
      </div>

      <button
        onClick={handleClick}
        className="mt-8 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
      >
        Go to Home Page
      </button>
    </div>
  );
}

export default HomePage;
