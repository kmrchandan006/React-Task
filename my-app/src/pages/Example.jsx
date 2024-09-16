import React from 'react';
import { ReactTyped } from 'react-typed'; // Correct import

const Example = () => {
  return (
    <div className="text-center text-lg font-medium text-gray-700 mb-6">
      <div className="text-4xl font-bold">
        Hi,
      </div>
      <div className="text-4xl font-bold">
        <ReactTyped
          strings={[
            '<span style="color:#1E90FF">Welcome to <strong>INTERNSHIP PROGRAM</strong></span>',
            '<span style="color:#FF6347">Welcome to <strong>Mobzway Internship</strong></span>'
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
          showCursor={false}
        />
      </div>
    </div>
  );
};

export default Example;
