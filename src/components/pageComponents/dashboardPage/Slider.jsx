import React from 'react';

const Slider = ({ isOpen, onCancel, onConfirm, title, message }) => {
  return (
    <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${isOpen ? 'block' : 'hidden'}`}>
      <div className="absolute w-full h-full bg-gray-900 opacity-50"></div>
      <div className="relative bg-white rounded-lg w-80 p-8">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <p className="mb-4">{message}</p>
        <div className="flex justify-end">
          <button
            className="bg-gray-500 text-white py-2 px-4 rounded mr-2"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="bg-red-500 text-white py-2 px-4 rounded"
            onClick={onConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;