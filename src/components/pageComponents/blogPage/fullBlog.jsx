// FullBlog.js
import React from 'react';

const FullBlog = ({ title, fullContent, image, author, date, onBack }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden m-4 max-w-3xl mx-auto">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-gray-600 text-sm mb-6">By {author} on {date}</p>
        <p className="text-gray-800 mb-4 whitespace-pre-wrap">{fullContent}</p>
        <button 
          onClick={onBack} 
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Back to Blogs
        </button>
      </div>
    </div>
  );
};

export default FullBlog;
