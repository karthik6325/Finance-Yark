// BlogCard.js
import React from 'react';

const BlogCard = ({ title, content, image, author, date, onClick }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:-translate-y-1 m-4 max-w-xl cursor-pointer"
      onClick={onClick}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 text-sm mb-4">By {author} on {date}</p>
        <p className="text-gray-800">{content}</p>
      </div>
    </div>
  );
};

export default BlogCard;
