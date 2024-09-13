import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary components
import './App.css'; 
import SumTwoNumbers from './pages/SumTwoNumbers';
import ShowAndHide from './pages/ShowAndHide';
import Counter from './pages/Counter';
import ArraySerch from './pages/ArraySerch';
import ParentComponent from './pages/ParentComponent';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage'; // Assuming you have a HomePage component

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Home Page */}
        <Route path="/Counter" element={<Counter />} /> {/* Counter page */}
        <Route path="/SumTwoNumbers" element={<SumTwoNumbers />} /> {/* SumTwoNumbers page */}
        <Route path="/ParentComponent" element={<ParentComponent />} /> {/* Dynamic route with user id */}
        
        {/* Nested route example */}
        <Route path="/ArraySerch" element={<ArraySerch />}>
          <Route path="ShowAndHide" element={<ShowAndHide />} /> {/* Nested profile route */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
