import React, { useState } from 'react';
import '../index.css'; 

const ArraySearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-50 min-h-screen">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTerm(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {filteredItems.length > 0 ? (
        <ul className="list-disc list-inside">
          {filteredItems.map((item, index) => (
            <li key={index} className="text-lg text-gray-800 mb-2">{item}</li>
          ))}
        </ul>
      ) : (
        <div className="text-red-500 font-medium">No results found</div>
      )}
    </div>
  );
};

export default ArraySearch;
