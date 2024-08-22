import React from "react";
import "./service.css";
import { BlockedIcon, HandPointingLeftIcon } from "../../../Icons";
import { useNavigate } from "react-router-dom";

const AuthService = () => {
  const navigate = useNavigate(); // Sử dụng hook useNavigate

  const handleLearnMoreClick = () => {
    navigate("/auth/locketgold"); // Chuyển hướng đến trang /locketgold
  };
  const handleWarrantyClick = () => {
    navigate("/auth/warranty"); // Chuyển hướng đến trang /locketgold
  };
  const hotTrendStyle = {
    position: "absolute",
    right: "1px",
    top: "11px",
    transform: "rotate(45deg)",
    backgroundColor: "#ef4444", // Màu đỏ tương đương Tailwind
    color: "#ffffff",
    padding: "4px 12px",
    fontSize: "0.75rem", // text-xs tương đương
    borderRadius: "0.375rem", // rounded-md tương đương
    zIndex: 20, // Đảm bảo zIndex cao hơn các phần tử khác
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", // Thêm bóng để nổi bật hơn
  };

  return (
    <>
      {/*Dịch vụ 1:"Kích hoạt locket gold */}
      <div className="relative border max-w-2xl mx-4 mb-10 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-10 bg-white dark:bg-gray-800 shadow-xl rounded-lg text-gray-900 dark:text-white flex">
        {/* Phần "Hot Trend" */}
        <div style={hotTrendStyle} className="hot-trend-animation">
          Hot
        </div>

        {/* Phần ảnh */}
        <div className="flex-shrink-0 mt-6 ml-6 rounded-lg h-24 w-24 overflow-hidden flex items-center justify-center bg-gray-200 dark:bg-gray-700">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/webdio-20ca8.appspot.com/o/images%2FLocket%2FIMG_3022.JPG?alt=media&token=948fe59d-1897-4c6d-a4c0-b981537c954b"
            alt="Placeholder"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Phần thông tin */}
        <div className="p-6 flex-1">
          <h2 className="text-xl font-semibold mb-3">Locket Gold💛</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Active Locket Gold Vip vĩnh viễn dùng full chức năng.
          </p>
          <div className="flex items-center mt-4">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              onClick={handleLearnMoreClick} // Gán sự kiện onClick cho nút
            >
              Đăng Kí Ngay
            </button>
            <div className="ml-4 mr-6 pointing-animation">
              <HandPointingLeftIcon />
            </div>
          </div>
        </div>
      </div>
      {/* Dịch vụ 2:Thực hiện bảo hành */}
      <div className="relative border max-w-2xl mx-4 mb-10 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-10 bg-white dark:bg-gray-800 shadow-xl rounded-lg text-gray-900 dark:text-white flex">
        {/* Phần "Hot Trend" */}
        <div style={hotTrendStyle} className="hot-trend-animation">
          New
        </div>
        {/* Phần ảnh */}
        <div className="flex-shrink-0 mt-6 ml-6 rounded-lg h-24 w-24 overflow-hidden flex items-center justify-center bg-gray-200 dark:bg-gray-700">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/webdio-20ca8.appspot.com/o/images%2FLocket%2FIMG_3022.JPG?alt=media&token=948fe59d-1897-4c6d-a4c0-b981537c954b"
            alt="Placeholder"
            className="w-full h-full object-cover"
          />
          
        </div>
        <div className="absolute block-icon">
          <BlockedIcon />
        </div>

        {/* Phần thông tin */}
        <div className="p-6 flex-1">
          <h2 className="text-xl font-semibold mb-3">Bảo Hành Locket Gold</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Thực hiện bảo hành Locket Gold khi lỡ xoá hoặc bị mất.
          </p>
          <div className="flex items-center mt-4">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              onClick={handleWarrantyClick} // Gán sự kiện onClick cho nút
            >
              Gửi Yêu Cầu
            </button>
            <div className="ml-4 mr-6 pointing-animation">
              <HandPointingLeftIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthService;
