// BlogList.js
import React, { useState } from 'react';
import blogs from './blogData';
import BlogCard from './blogCard';
import FullBlog from './fullBlog';

const BlogList = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleCardClick = (blog) => {
    setSelectedBlog(blog);
  };

  const handleBack = () => {
    setSelectedBlog(null);
  };

  return (
    <div className="container mx-auto py-12">
      {selectedBlog ? (
        <FullBlog 
          title={selectedBlog.title}
          fullContent={selectedBlog.fullContent}
          image={selectedBlog.image}
          author={selectedBlog.author}
          date={selectedBlog.date}
          onBack={handleBack}
        />
      ) : (
        <div className="flex flex-wrap justify-center">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              title={blog.title}
              content={blog.content}
              image={blog.image}
              author={blog.author}
              date={blog.date}
              onClick={() => handleCardClick(blog)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogList;
