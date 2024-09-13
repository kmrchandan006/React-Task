import { useState } from "react";
import '../index.css'; 

function Enable() {
  // State to control if the button is enabled or disabled
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  // Function to toggle the button state
  const toggleButtonState = () => {
    setIsButtonDisabled(!isButtonDisabled);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      {/* Button with conditional styles and disabled state */}
      <button
        className={`px-4 py-2 text-white font-bold rounded-lg ${
          isButtonDisabled
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-700"
        }`}
        disabled={isButtonDisabled}
      >
        {isButtonDisabled ? "Disabled" : "Enabled"}
      </button>

      {/* Toggle Button to change state */}
      <button
        className="px-4 py-2 bg-green-500 text-white font-bold rounded-lg hover:bg-green-700"
        onClick={toggleButtonState}
      >
        Toggle Button State
      </button>
    </div>
  );
}

export default Enable;
