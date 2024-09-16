import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="relative">
      {/* Navbar */}
      <nav className="flex justify-between items-center bg-gray-100 p-2.5 shadow-lg">
        <div className="flex justify-center gap-5">
          <Link to="/" className="text-gray-800 text-lg hover:text-blue-500">
            HomePage
          </Link>

          <Link to="/ShowAndHide" className="text-gray-800 text-lg hover:text-blue-500">
            HideHomePage
          </Link>
        </div>

        {/* Toggle Sidebar Button */}
        <button
          onClick={toggleSidebar}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          {isSidebarVisible ? 'Hide Menu' : 'Show Menu'}
        </button>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-gray-200 shadow-lg transform transition-transform duration-300 ${isSidebarVisible ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <ul className="mt-10 space-y-4 p-4">
          <li>
            <Link to="/" className="text-gray-800 text-lg hover:text-blue-500">
              HomePage
            </Link>
          </li>
          <li>
            <Link to="/SumTwoNumbers" className="text-gray-800 text-lg hover:text-blue-500">
              SumTwoNumbers
            </Link>
          </li>
          <li>
            <Link to="/Counter" className="text-gray-800 text-lg hover:text-blue-500">
              Counter
            </Link>
          </li>
          <li>
            <Link to="/ArraySerch" className="text-gray-800 text-lg hover:text-blue-500">
              ArraySerch
            </Link>
          </li>
          <li>
            <Link to="/ParentComponent" className="text-gray-800 text-lg hover:text-blue-500">
              ParentComponent
            </Link>
          </li>
          <li>
            <Link to="/Enable" className="text-gray-800 text-lg hover:text-blue-500">
              Enable
            </Link>
          </li>
          <li>
            <Link to="/CustomerTable" className="text-gray-800 text-lg hover:text-blue-500">
              CustomerTable
            </Link>
          </li>
          <li>
            <Link to="/DragDropTask" className="text-gray-800 text-lg hover:text-blue-500">
              DragDropTask
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
