import React from 'react';
import { CommentIcon, HeartIcon, RedHeartIcon, ShareIcon } from "../../../../Icons";

const FeedbackItem = ({ feedback, onLike, onComment, onShare, formatDate, user }) => {
  const hasLiked = (likedBy) => user && Array.isArray(likedBy) && likedBy.includes(user.uid);

  return (
    <div className="border p-4 rounded-md shadow-sm">
      <p className="font-bold">{feedback.name}</p>
      <p>{feedback.content}</p>
      {feedback.image && (
        <img
          src={feedback.image}
          alt="Preview"
          className="mt-2 w-40 h-auto rounded-lg"
        />
      )}
      <p className="text-gray-500 mt-2 dark:text-gray-100">
        {formatDate(feedback.timestamp)}
      </p>
      <div className="flex space-x-4 mt-2">
        <button
          onClick={() => onLike(feedback.id)}
          className="flex items-center text-gray-500 hover:text-gray-700 dark:text-gray-100"
        >
          {hasLiked(feedback.likedBy) ? (
            <RedHeartIcon className="h-5 w-5 text-red-500 heart-animation" />
          ) : (
            <HeartIcon className="h-5 w-5" />
          )}
          <span className="ml-1">{feedback.likes || 0}</span>
        </button>
        <button
          onClick={() => onComment(feedback.id)}
          className="flex items-center text-gray-500 hover:text-gray-700 dark:text-gray-100"
        >
          <CommentIcon className="h-5 w-5" />
          <span className="ml-1"></span>
        </button>
        <button
          onClick={() => onShare(feedback.id)}
          className="flex items-center text-gray-500 hover:text-gray-700 dark:text-gray-100"
        >
          <ShareIcon className="h-5 w-5" />
          <span className="ml-1">{feedback.shares || 0}</span>
        </button>
      </div>
    </div>
  );
};

export default FeedbackItem;
