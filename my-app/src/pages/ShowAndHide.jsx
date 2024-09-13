import React, { useState } from 'react';
import '../index.css'; 
function ShowAndHide() {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg shadow-md">
      {show && <h1 className="text-2xl font-bold text-gray-800 mb-4">Hello World!</h1>}
      <div className="flex space-x-4">
        <button
          onClick={() => setShow(true)}
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
        >
          Show
        </button>
        <button
          onClick={() => setShow(false)}
          className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition"
        >
          Hide
        </button>
        {/* <button
          onClick={() => setShow(!show)}
          className="px-4 py-2 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600 transition"
        >
          Toggle
        </button> */}
      </div>
    </div>
  );
}

export default ShowAndHide;
