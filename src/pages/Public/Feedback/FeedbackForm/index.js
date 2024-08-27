import React from 'react';
import { AddIcon, CancelIconV2 } from "../../../../Icons";

const FeedbackForm = ({ content, name, image, error, formVisible, setFormVisible, handleContentChange, handleNameChange, handleImageChange, handleSubmit, suggestions, showSuggestions, handleSuggestionClick }) => {
  return (
    formVisible && (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70 z-50">
        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-lg w-full max-w-sm relative">
          <button
            onClick={() => setFormVisible(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-gray-300"
          >
            <CancelIconV2 className="h-6 w-6" />
          </button>
          <h2 className="text-2xl font-bold mb-4">Gửi phản hồi</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300">
                Họ và tên:
                <input
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                  className="w-full mt-1 p-2 border rounded dark:bg-gray-800 dark:text-gray-100"
                  required
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300">
                Nội dung phản hồi:
                <textarea
                  value={content}
                  onChange={handleContentChange}
                  className="w-full mt-1 p-2 border rounded dark:bg-gray-800 dark:text-gray-100"
                  required
                />
              </label>
              {showSuggestions && (
                <ul className="mt-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-lg shadow-lg absolute z-10">
                  {suggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300">
                Chọn ảnh:
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full mt-1"
                />
              </label>
              {error && <p className="text-red-500">{error}</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              Gửi phản hồi
            </button>
          </form>
        </div>
      </div>
    )
  );
};

export default FeedbackForm;
