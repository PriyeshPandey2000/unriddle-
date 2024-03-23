"use client"
import React, { useState } from 'react';

const CoolPostForm = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [textInput, setTextInput] = useState('');

  const handleTagSelection = (selectedTag) => {
    setSelectedTags((prevSelectedTags) => {
      if (prevSelectedTags.includes(selectedTag)) {
        return prevSelectedTags.filter((tag) => tag !== selectedTag);
      } else {
        return [...prevSelectedTags, selectedTag];
      }
    });
  };

  const handleSubmit = () => {
    console.log('Selected Tags:', selectedTags);
    console.log('Text Input:', textInput);
    // Add your post submission logic here
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-gray-500 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4 text-white">Create a Cool Post</h1>

      {/* Tags Dropdowns */}
      <div className="mb-4">
        <label className="block text-white text-sm font-semibold mb-2">Select Tags</label>
        <div className="flex space-x-4">
          <select
            className="w-full p-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring focus:border-blue-500"
            onChange={(e) => handleTagSelection(e.target.value)}
          >
            <option value="tag1">Tag 1</option>
            <option value="tag2">Tag 2</option>
            <option value="tag3">Tag 3</option>
          </select>
        </div>
      </div>

      {/* Text Input */}
      <div className="mb-4">
        <label className="block text-white text-sm font-semibold mb-2">Write Something Cool</label>
        <textarea
          className="w-full p-2 bg-gray-700 text-white rounded-md resize-none focus:outline-none focus:ring focus:border-blue-500"
          rows="4"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        onClick={handleSubmit}
      >
        Cool Post
      </button>
    </div>
  );
};

export default CoolPostForm;
