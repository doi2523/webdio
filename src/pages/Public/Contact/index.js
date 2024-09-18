import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus('');

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionStatus('Cảm ơn bạn đã liên hệ với chúng tôi! Chúng tôi sẽ phản hồi sớm.');
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <div className="h-10" />

      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-extrabold mb-6 text-gray-900 dark:text-gray-100 text-center">
          Liên Hệ Với Chúng Tôi
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="name">
              Họ và Tên
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 dark:focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 dark:focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="message">
              Tin Nhắn
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 dark:focus:border-indigo-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-md hover:bg-blue-700 dark:hover:bg-blue-400 transition duration-200"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Đang gửi...' : 'Gửi Tin Nhắn'}
          </button>
          {submissionStatus && (
            <p className="mt-4 text-green-500 text-center">{submissionStatus}</p>
          )}
        </form>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4 text-center">
            Thông Tin Liên Hệ
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-center">
            <strong>Email:</strong> contact@example.com
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-center">
            <strong>Điện thoại:</strong> +84 123 456 789
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-center">
            <strong>Địa chỉ:</strong> 123 Đường ABC, Thành phố XYZ, Việt Nam
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
