import React from 'react';
import FeedbackItem from '../FeedbackRespontive';

const FeedbackList = ({ feedbacks, onLike, onComment, onShare, formatDate, user }) => {
  return (
    <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-6 mb-4 dark:bg-gray-800 dark:text-gray-100">
      <h1 className="text-2xl font-bold mb-4">Phản hồi của người dùng</h1>
      <div className="space-y-4">
        {feedbacks.length === 0 ? (
          <p className="text-gray-500">Chưa có phản hồi nào.</p>
        ) : (
          feedbacks.map((feedback) => (
            <FeedbackItem
              key={feedback.id}
              feedback={feedback}
              onLike={onLike}
              onComment={onComment}
              onShare={onShare}
              formatDate={formatDate}
              user={user}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default FeedbackList;
