import React from 'react';

function About() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Về Chúng Tôi
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Chào mừng đến với trang "Về Chúng Tôi"! Chúng tôi là một đội ngũ đam mê và tận tâm, cam kết mang đến những sản phẩm và dịch vụ tốt nhất cho bạn.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Với nhiều năm kinh nghiệm trong ngành, chúng tôi luôn cập nhật các công nghệ mới nhất và áp dụng những phương pháp tối ưu để đảm bảo rằng bạn nhận được giá trị tốt nhất từ các sản phẩm và dịch vụ của chúng tôi.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Thông Tin Liên Hệ
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
          <li>
            <strong>Email:</strong> contact@example.com
          </li>
          <li>
            <strong>Điện thoại:</strong> +84 123 456 789
          </li>
          <li>
            <strong>Địa chỉ:</strong> 123 Đường ABC, Thành phố XYZ, Việt Nam
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
