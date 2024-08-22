import React, { useState } from 'react';
import { getDatabase, ref, get } from 'firebase/database'; // Firebase Realtime Database functions
import './style.css';

function Warranty() {
  const [formData, setFormData] = useState({ icloud: '' });
  const [emailExists, setEmailExists] = useState(null); // Trạng thái kiểm tra email
  const [loading, setLoading] = useState(false); // Trạng thái hiển thị loading
  const [warrantyInfo, setWarrantyInfo] = useState(null); // Thông tin bảo hành

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setWarrantyInfo(null); // Reset thông tin bảo hành khi tìm kiếm mới

    const db = getDatabase();
    const dbRef = ref(db, 'locketGoldRequests'); // Tham chiếu đến nút locketGoldRequests

    try {
      const snapshot = await get(dbRef);

      if (snapshot.exists()) {
        const users = snapshot.val();
        const user = Object.values(users).find(
          (user) => user.icloud === formData.icloud
        );

        if (user) {
          setEmailExists(true);
          setWarrantyInfo({
            name: user.name,
            phone: user.phone,
            status: user.status,
            timestamp: user.timestamp
          });
        } else {
          setEmailExists(false);
        }
      } else {
        setEmailExists(false);
      }
    } catch (error) {
      console.error('Lỗi khi kiểm tra email:', error);
      setEmailExists(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md p-4">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
          Điền Biểu Mẫu Bảo Hành
        </h2>
        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <label className="block mb-4">
            <span className="text-gray-700 dark:text-gray-300">Tài Khoản iCloud:</span>
            <input
              type="email"
              name="icloud"
              value={formData.icloud}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring focus:ring-indigo-300 focus:border-indigo-500 dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
              required
            />
          </label>

          {loading && <p className="text-blue-500">Đang kiểm tra...</p>}

          {!loading && emailExists === true && (
            <p className="text-green-500">Email tồn tại trong cơ sở dữ liệu.</p>
          )}

          {!loading && emailExists === false && (
            <p className="text-red-500">Email không tồn tại trong cơ sở dữ liệu.</p>
          )}

          <button
            type="submit"
            className="mt-4 w-full px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-md hover:bg-blue-700 dark:hover:bg-blue-400 transition-colors duration-200"
          >
            Kiểm Tra
          </button>
        </form>

        {/* Hiển thị thông tin bảo hành nếu có */}
        {warrantyInfo && (
          <div className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">Thông Tin Bảo Hành</h3>
            <p className="text-gray-700 dark:text-gray-300">Tên: {warrantyInfo.name}</p>
            <p className="text-gray-700 dark:text-gray-300">Số Điện Thoại: {warrantyInfo.phone}</p>
            <p className="text-gray-700 dark:text-gray-300">Trạng Thái: {warrantyInfo.status}</p>
            <p className="text-gray-700 dark:text-gray-300">Thời Gian: {warrantyInfo.timestamp}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Warranty;
