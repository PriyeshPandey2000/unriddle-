import React from 'react';

const CategoryList = ({ category }) => {
  return (
    <div className="flex items-center text-sm text-gray-600 bg-transparent p-2 rounded-lg">
      <svg className="w-4 h-4 mr-1 fill-current text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M2 5a1 1 0 0 1 1-1h14a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1zM3 11a1 1 0 1 1 0 2h14a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zm0 6a1 1 0 0 1 0 2h14a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2z"/>
      </svg>
      {category}
    </div>
  );
};

export default CategoryList;
