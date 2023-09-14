import React, { useState } from 'react';
import './Signup.css';

function Signup() {
  const [htmlLink, setHtmlLink] = useState(
    'https://taalhaataahir0102.github.io/llvm-training/Task1'
  );

  const [activeButton, setActiveButton] = useState(1); // Initialize with the first button

  const handleButtonClick = (taskNumber) => {
    const newLink = `https://taalhaataahir0102.github.io/llvm-training/Task${taskNumber}`;
    setHtmlLink(newLink);
    setActiveButton(taskNumber); // Update the active button
  };

  const buttonLabels = Array.from({ length: 12 }, (_, index) => index + 1);

  return (
    <div className="container">
      <div className="left-header">
        <ul className="button-list">
          {buttonLabels.map((label) => (
            <li key={label}>
              <button
                className={`button ${activeButton === label ? 'active' : ''}`} // Apply 'active' class if it's the active button
                onClick={() => handleButtonClick(label)}
              >
                Task {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <iframe
        title="Task 1"
        src={htmlLink}
        style={{ border: 'none', width: '100%', height: '100vh' }}
      ></iframe>
    </div>
  );
}

export default Signup;
