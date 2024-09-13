import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';  // Go one level up to src folder


function Navbar() {
  return (
    <nav className="flex justify-center gap-5 bg-gray-100 p-2.5">
      <Link
        to="/"
        className="text-gray-800 text-lg hover:text-blue-500"
      >
        Home
      </Link>
      <Link
        to="/SumTwoNumbers"
        className="text-gray-800 text-lg hover:text-blue-500"
      >
        SumTwoNumbers
      </Link>
      <Link
        to="/Counter"
        className="text-gray-800 text-lg hover:text-blue-500"
      >
        Counter
      </Link>
      <Link
        to="/ArraySerch"
        className="text-gray-800 text-lg hover:text-blue-500"
      >
        ArraySerch
      </Link>
      <Link
        to="/ParentComponent"
        className="text-gray-800 text-lg hover:text-blue-500"
      >
        ParentComponent
      </Link>
      <Link
        to="/Enable"
        className="text-gray-800 text-lg hover:text-blue-500"
      >
        Enable
      </Link>
      <div>
        <Link
          to="/ShowAndHide"
          className="text-gray-800 text-lg hover:text-blue-500"
        >
          ShowAndHide
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
