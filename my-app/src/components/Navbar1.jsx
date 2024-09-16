import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import '../index.css';  // Go one level up to src folder


const Navbar1 = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[black]'>WsCube Tech.</h1>
      <ul className='hidden md:flex'>
        <li className='p-4'>HomePage</li>
        <li className='p-4'>SumTwoNumbers</li>
        <li className='p-4'>Counter</li>
        <li className='p-4'>ArraySerch</li>
        <li className='p-4'>ParentComponent</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[black] m-4'>REACT.</h1>
          <li className='p-4 border-b border-gray-600'>HomePage</li>
          <li className='p-4 border-b border-gray-600'>SumTwoNumbers</li>
          <li className='p-4 border-b border-gray-600'>Counter</li>
          <li className='p-4 border-b border-gray-600'>ArraySerch</li>
          <li className='p-4'>ParentComponent</li>
      </ul>
    </div>
  );
};

export default Navbar1;