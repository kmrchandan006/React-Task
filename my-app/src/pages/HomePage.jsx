import React from 'react';
import ShowAndHide from './ShowAndHide';
import SumTwoNumbers from './SumTwoNumbers';
import Counter from './Counter';
import ArraySerch from './ArraySerch';
import ParentComponent from './ParentComponent';
import { useNavigate } from 'react-router-dom';

function HomePage(){

  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to user with ID 5
    navigate('/HomePage');
    // navigate('/SumTwoNumbers');
    // navigate('/ShowAndHide');
    // navigate('/Counter');
    // navigate('/ArraySerch');
    // navigate('/ParentComponent');
  };


  return (
    <div>
      <h2>Home Page</h2>
      <SumTwoNumbers/>
       <ShowAndHide/>
       <Counter/>
       <ArraySerch/>
       <ParentComponent/>
      <button onClick={handleClick}>Go to Home Page</button>
      
    </div>
  );
}

export default HomePage;

  