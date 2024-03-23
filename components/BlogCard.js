import React from 'react';
import TagList from './TagList';
import CategoryList from './CategoryList';

const BlogCard = ({ title, content, tags, category }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg mb-6 bg-transparent">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-white">{content}</p>
      </div>
      <div className="flex justify-between p-4 bg-gray-100">
        <div className="flex items-center">
          <TagList tags={tags} />
          <CategoryList category={category} />
        </div>
        {/* Add a read more or details link/button if needed */}
      </div>
    </div>
  );
};

export default BlogCard;
