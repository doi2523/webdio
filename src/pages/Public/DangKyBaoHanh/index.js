import React, { useState } from "react";
import { database } from "../../../Firebase/firebase";
import { ref, set, push, get } from "firebase/database";
import Swal from "sweetalert2"; // Import SweetAlert

function DangKyBaoHanh() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    icloud: "",
  });

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
      Swal.fire({
        icon: "success",
        title: "Thành công!",
        text: "Thông tin đã được lưu thành công!",
      });
    } catch (error) {
      console.error("Error saving data:", error);
      Swal.fire({
        icon: "error",
        title: "Lỗi",
        text: "Đã xảy ra lỗi khi lưu thông tin. Vui lòng thử lại sau.",
      });
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

    const icloud = formData.icloud.trim();

    if (!icloud) {
      Swal.fire({
        icon: "warning",
        title: "Cảnh báo",
        text: "Vui lòng nhập địa chỉ iCloud hợp lệ.",
      });
      return;
    }

    // Tham chiếu tới vị trí dữ liệu trong Realtime Database
    const userRef = ref(database, `DangKyBaoHanhRequests`);

    try {
      // Lấy dữ liệu từ Realtime Database
      const snapshot = await get(userRef);
      const data = snapshot.val();

      // Kiểm tra xem có địa chỉ iCloud nào trùng lặp không
      const isDuplicate = Object.values(data || {}).some(
        (item) => item.icloud === icloud
      );

      if (isDuplicate) {
        Swal.fire({
          icon: "warning",
          title: "Cảnh báo",
          text: "Địa chỉ iCloud này đã tồn tại.",
        });
        return;
      }

      // Tạo đối tượng chứa dữ liệu cần lưu
      const dataToSave = {
        ...formData,
        timestamp: getCurrentDateTimeVN(), // Thời gian hiện tại định dạng Việt Nam
        status: "kích hoạt", // Trạng thái "kích hoạt"
      };

      // Tạo một khóa tự động từ Firebase
      const newKey = push(userRef).key;

      // Lưu dữ liệu vào Realtime Database với khóa tự tạo
      await set(ref(database, `DangKyBaoHanhRequests/${newKey}`), dataToSave);

      Swal.fire({
        icon: "success",
        title: "Thành công",
        text: "Thông tin đã được lưu thành công.",
      });
    } catch (error) {
      console.error("Error checking data:", error);
      Swal.fire({
        icon: "error",
        title: "Lỗi",
        text: "Đã xảy ra lỗi khi kiểm tra thông tin. Vui lòng thử lại sau.",
      });
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
          Điền Biểu Mẫu Bảo Hành
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
              placeholder="Nhập tên của bạn"
              className="mt-1 block w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring focus:ring-indigo-300 focus:border-indigo-500 dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
              required
              minLength={2}
              maxLength={50}
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
              placeholder="Nhập số điện thoại của bạn"
              className="mt-1 block w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring focus:ring-indigo-300 focus:border-indigo-500 dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
              required
              pattern="[0-9]{10,15}"
              title="Số điện thoại phải từ 10 đến 15 chữ số"
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
              placeholder="Nhập địa chỉ iCloud của bạn"
              className="mt-1 block w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring focus:ring-indigo-300 focus:border-indigo-500 dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              title="Địa chỉ email không hợp lệ"
            />
          </label>

          <button
            type="submit"
            className="mt-4 w-full px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-md hover:bg-blue-700 dark:hover:bg-blue-400 transition-colors duration-200"
          >
            Đăng Kí
          </button>
        </form>
      </div>
      <hr />
      <div className="mt-4 text-center text-white my-2 w-full max-w-md p-4">
        <hr className="mb-2" />
        <p className="text-sm text-gray-700 dark:text-gray-300">
          Điền thông tin biểu mẫu này để có thể lưu trữ thông tin của bạn, tôi
          luôn bảo mật thông tin khách hàng. Lưu ý hãy nhập đúng thông tin vì
          quyền lợi của bạn.
        </p>
      </div>
    </div>
  );
}

export default DangKyBaoHanh;
