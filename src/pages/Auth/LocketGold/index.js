import React, { useState } from "react";
import { database, auth } from "../../../Firebase/firebase";
import { ref, set, get } from "firebase/database";

function LocketGold() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    icloud: "",
  });

  const [error, setError] = useState(""); // Trạng thái để hiển thị lỗi nếu thông tin đã tồn tại
  const [success, setSuccess] = useState(""); // Trạng thái để hiển thị thông báo thành công

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const saveData = async (path, data) => {
    try {
      await set(ref(database, path), data);
      setSuccess("Thông tin đã được lưu thành công!");
      setError(""); // Xóa lỗi nếu có thông báo thành công
    } catch (error) {
      console.error("Error saving data:", error);
      setError("Đã xảy ra lỗi khi lưu thông tin. Vui lòng thử lại sau.");
    }
  };

  const getCurrentDateTimeVN = () => {
    const now = new Date();
    return now.toLocaleString("vi-VN", {
      timeZone: "Asia/Ho_Chi_Minh",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = auth.currentUser; // Giả sử người dùng đã đăng nhập
    const uid = user?.uid;

    if (!uid) {
      setError("Không thể xác định người dùng. Vui lòng đăng nhập lại.");
      return;
    }

    const userRef = ref(database, `locketGoldRequests/${uid}`);

    try {
      const snapshot = await get(userRef);

      if (snapshot.exists()) {
        setError("Thông tin đã tồn tại trong cơ sở dữ liệu.");
        setSuccess("");
      } else {
        // Tạo đối tượng chứa dữ liệu cần lưu
        const dataToSave = {
          ...formData,
          timestamp: getCurrentDateTimeVN(), // Thời gian hiện tại định dạng Việt Nam
          status: "kích hoạt", // Trạng thái "kích hoạt"
        };

        // Lưu dữ liệu vào Realtime Database nếu chưa có
        saveData(`locketGoldRequests/${uid}`, dataToSave);
      }
    } catch (error) {
      console.error("Error checking data:", error);
      setError("Đã xảy ra lỗi khi kiểm tra thông tin. Vui lòng thử lại sau.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
      {/* Banner */}
      <div className="w-full bg-blue-600 text-white py-8 mb-6 banner-marquee flex items-center">
        <h1 className="text-2xl font-bold">
          Active Locket Gold💛 vĩnh viễn full chức năng
        </h1>
      </div>

      {/* Form */}
      <div className="w-full max-w-md p-4">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
          Điền Biểu Mẫu
        </h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <label className="block mb-4">
            <span className="text-gray-700 dark:text-gray-300">Tên:</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring focus:ring-indigo-300 focus:border-indigo-500 dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
              required
            />
          </label>

          <label className="block mb-4">
            <span className="text-gray-700 dark:text-gray-300">
              Số Điện Thoại:
            </span>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring focus:ring-indigo-300 focus:border-indigo-500 dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
              required
            />
          </label>

          <label className="block mb-4">
            <span className="text-gray-700 dark:text-gray-300">
              Tài Khoản iCloud:
            </span>
            <input
              type="email"
              name="icloud"
              value={formData.icloud}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring focus:ring-indigo-300 focus:border-indigo-500 dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
              required
            />
          </label>

          {error && <p className="mt-2 text-red-500">{error}</p>}

          {success && <p className="mt-2 text-green-500">{success}</p>}

          <button
            type="submit"
            className="mt-4 w-full px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-md hover:bg-blue-700 dark:hover:bg-blue-400 transition-colors duration-200"
          >
            Đăng Kí
          </button>
        </form>
      </div>
    </div>
  );
}

export default LocketGold;
