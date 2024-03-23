import React from 'react';

const TagList = ({ tags }) => {
  return (
    <div className="flex items-center text-sm text-gray-600 bg-white p-2 rounded-lg">
      <svg className="w-4 h-4 mr-1 fill-current text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M12 7.41l-1.41-1.41-6.59 6.59L3 10.59l9-9 9 9-1.41 1.41-7.59-7.59z"/>
      </svg>
      {tags.map(tag => (
        <span key={tag} className="mr-2 bg-gray-100 py-1 px-2 rounded-full">{tag}</span>
      ))}
    </div>
  );
};

export default TagList;
