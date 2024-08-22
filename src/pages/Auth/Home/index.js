import React from 'react';

const posts = [
  {
    id: 1,
    user: "john_doe",
    avatar: "https://via.placeholder.com/50",
    image: "https://via.placeholder.com/500",
    caption: "Loving this new place! #vacation",
  },
  {
    id: 2,
    user: "jane_doe",
    avatar: "https://via.placeholder.com/50",
    image: "https://via.placeholder.com/500",
    caption: "Great day with friends! #fun",
  },
  // Add more posts here
];

const AuthHome = () => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      {posts.map((post) => (
        <div key={post.id} className="bg-white shadow-md rounded-lg mb-4 overflow-hidden">
          <div className="flex items-center p-4 border-b">
            <img src={post.avatar} alt="Avatar" className="w-10 h-10 rounded-full mr-3" />
            <span className="font-semibold text-sm">{post.user}</span>
          </div>
          <img src={post.image} alt="Post" className="w-full object-cover" />
          <div className="p-4">
            <div className="flex items-center space-x-4 mb-2">
              <button className="text-red-500 hover:text-red-600 text-xl">❤️</button>
              <button className="text-gray-500 hover:text-gray-600 text-xl">💬</button>
            </div>
            <p className="font-semibold text-sm">{post.user}</p>
            <p className="mt-2 text-sm">{post.caption}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AuthHome;
