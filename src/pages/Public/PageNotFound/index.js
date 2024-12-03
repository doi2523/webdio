// components/PageNotFound.js
import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className='flex flex-col h-screen justify-center items-center bg-gray-100'>
      <h1 className='text-4xl font-bold mb-4'>404 - Page Not Found</h1>
      <p className='text-lg mb-6'>The page you are looking for does not exist.</p>
      <Link 
        to="/" 
        className=' btn-primary p-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50'>
        Go Back to Home
      </Link>
    </div>
  );
};

export default PageNotFound;
