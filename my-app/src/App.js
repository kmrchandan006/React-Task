import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary components
import SumTwoNumbers from './pages/SumTwoNumbers';
import ShowAndHide from './pages/ShowAndHide';
import Counter from './pages/Counter';
import ArraySerch from './pages/ArraySerch';
import ParentComponent from './pages/ParentComponent';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage'; // Assuming you have a HomePage component
import Enable from './pages/Enable';
import CustomerTable from './pages/CustomerTable';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />  
        <Route path="/Enable" element={<Enable/>}></Route>
        <Route path="/Counter" element={<Counter />} />  
        <Route path="/SumTwoNumbers" element={<SumTwoNumbers />} />  
        <Route path="/ParentComponent" element={<ParentComponent />} />
        <Route path="/CustomerTable" element={<CustomerTable/>} />
        
        {/* Nested route example */}
        <Route path="/ArraySerch" element={<ArraySerch />}>
       
          <Route path="ShowAndHide" element={<ShowAndHide />} /> {/* Nested profile route */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
