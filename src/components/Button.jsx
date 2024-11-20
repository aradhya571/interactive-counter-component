import React from 'react';

const Button = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 m-2 text-white font-semibold rounded-lg transition-colors duration-200 ease-in-out"
      style={{
        backgroundColor: label.includes('+') ? '#4CAF50' : '#f44336'
      }}
    >
      {label}
    </button>
  );
};

export default Button;
