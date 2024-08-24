import React from 'react';
import { Link } from 'react-router-dom'; // Để điều hướng đến các trang khác

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8 flex flex-col items-center justify-center">
      <div className="text-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-4 text-gray-900 dark:text-gray-100">
          Chào Mừng Đến Với Trang Chủ
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          Chúng tôi rất vui mừng khi bạn ghé thăm trang chủ của chúng tôi. Ở đây, bạn có thể tìm thấy những thông tin quan trọng và cập nhật mới nhất về sản phẩm và dịch vụ của chúng tôi.
        </p>
        <div className="space-y-4">
          <Link to="/about">
            <button className="px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-400 transition duration-200">
              Tìm Hiểu Thêm
            </button>
          </Link>
          <Link to="/contact">
            <button className="px-6 py-3 bg-green-600 dark:bg-green-500 text-white rounded-lg hover:bg-green-700 dark:hover:bg-green-400 transition duration-200">
              Liên Hệ
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
