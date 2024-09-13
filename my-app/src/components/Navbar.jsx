import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file


function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/SumTwoNumbers">SumTwoNumbers</Link>
      <Link to="/Counter">Counter</Link>
      <Link to="/ArraySerch">ArraySerch</Link>
      <Link to="/ParentComponent">ParentComponent</Link>
      <div>
        <Link to="/ShowAndHide">ShowAndHide</Link>
      </div>
    </nav>
  );
}

export default Navbar; 