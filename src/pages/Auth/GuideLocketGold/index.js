import React, { useState, useEffect } from "react";
import { ArrowLeftIcon, ArrowRightIcon, ClipBoardIcon } from "../../../Icons";
import Swal from "sweetalert2"; // Import SweetAlert2
import Draggable from "react-draggable";
import "./styles.css"; // Đảm bảo bạn import tệp CSS vào component
import Loading from "../../../components/Loading";

// Danh sách các đường link hình ảnh
const images = [
  "https://firebasestorage.googleapis.com/v0/b/webdio-20ca8.appspot.com/o/images%2FPictureGuide%2F1.jpg?alt=media&token=b561dc37-c854-4752-b23c-0fc971c2d9f3",
  "https://firebasestorage.googleapis.com/v0/b/webdio-20ca8.appspot.com/o/images%2FPictureGuide%2F2.jpg?alt=media&token=7fd38e7d-b43b-4d68-952d-4e0cc92f7ea6",
  "https://firebasestorage.googleapis.com/v0/b/webdio-20ca8.appspot.com/o/images%2FPictureGuide%2F3.jpg?alt=media&token=6a2063e0-3d65-4026-87d1-4ec4380551fa",
  "https://firebasestorage.googleapis.com/v0/b/webdio-20ca8.appspot.com/o/images%2FPictureGuide%2F4.png?alt=media&token=c96cb797-a34c-4956-9951-ea2f7c8bc7bd",
  "https://firebasestorage.googleapis.com/v0/b/webdio-20ca8.appspot.com/o/images%2FPictureGuide%2F5.jpg?alt=media&token=654fc3d3-5206-4550-8c2c-57792a9a27a2",
  "https://firebasestorage.googleapis.com/v0/b/webdio-20ca8.appspot.com/o/images%2FPictureGuide%2F6.jpg?alt=media&token=2b5c900c-7559-44e0-86f6-3fdcea9c1535",
  "https://firebasestorage.googleapis.com/v0/b/webdio-20ca8.appspot.com/o/images%2FPictureGuide%2F7.jpg?alt=media&token=4d8b22fd-525c-46d1-88f1-46d5a0d375bf",
  "https://firebasestorage.googleapis.com/v0/b/webdio-20ca8.appspot.com/o/images%2FPictureGuide%2F8.jpg?alt=media&token=21b0abba-4b08-4a5c-8480-ed38c73805e0",
  "https://firebasestorage.googleapis.com/v0/b/webdio-20ca8.appspot.com/o/images%2FPictureGuide%2F9.jpg?alt=media&token=14de5093-8a3c-47f6-b7fb-20eb30a0f975",
  "https://firebasestorage.googleapis.com/v0/b/webdio-20ca8.appspot.com/o/images%2FPictureGuide%2F10.jpg?alt=media&token=3c4c6910-e20f-4d07-ac0c-d0c4b1117da3",
  "https://firebasestorage.googleapis.com/v0/b/webdio-20ca8.appspot.com/o/images%2FPictureGuide%2F11.jpg?alt=media&token=8e48de60-bdb2-464b-8b77-1ba54385eea5",
  "https://firebasestorage.googleapis.com/v0/b/webdio-20ca8.appspot.com/o/images%2FPictureGuide%2F12.jpg?alt=media&token=ee3c45f8-f9f0-4c86-bd70-fe699e035e18",
  "https://firebasestorage.googleapis.com/v0/b/webdio-20ca8.appspot.com/o/images%2FPictureGuide%2F13.jpg?alt=media&token=bfbfb75a-e8f1-422a-9e2b-2ac06dbd3c35",
  "https://firebasestorage.googleapis.com/v0/b/webdio-20ca8.appspot.com/o/images%2FPictureGuide%2F14.jpg?alt=media&token=a31d8d74-a208-4ff1-9137-9fd45c0ea4e2",
  "https://firebasestorage.googleapis.com/v0/b/webdio-20ca8.appspot.com/o/images%2FPictureGuide%2F15.jpg?alt=media&token=c36e6262-8b11-43bc-a464-aae6cc98060d",
  "https://firebasestorage.googleapis.com/v0/b/webdio-20ca8.appspot.com/o/images%2FPictureGuide%2F17.jpg?alt=media&token=e005cf6a-b5ce-4f14-bde0-b7bf35900a00",
  "https://firebasestorage.googleapis.com/v0/b/webdio-20ca8.appspot.com/o/images%2FPictureGuide%2F18.jpg?alt=media&token=9d9502d6-8259-455f-92d1-37a8faefac44",
  "https://firebasestorage.googleapis.com/v0/b/webdio-20ca8.appspot.com/o/images%2FPictureGuide%2F19.jpg?alt=media&token=0673730b-e10a-495a-8b87-a96127a0108d",
  "https://firebasestorage.googleapis.com/v0/b/webdio-20ca8.appspot.com/o/images%2FPictureGuide%2F20.jpg?alt=media&token=c385a973-ad42-40d8-9696-a83f843af5a1",
  "https://firebasestorage.googleapis.com/v0/b/webdio-20ca8.appspot.com/o/images%2FPictureGuide%2F21.jpg?alt=media&token=1f2b1bbc-ba38-4fb8-b186-792545c7e50a",
  "https://firebasestorage.googleapis.com/v0/b/webdio-20ca8.appspot.com/o/images%2FPictureGuide%2F22.jpg?alt=media&token=b952d5df-87f2-4e8c-a3d6-13e294e1fc64",
  "https://firebasestorage.googleapis.com/v0/b/webdio-20ca8.appspot.com/o/images%2FPictureGuide%2F23.PNG?alt=media&token=107b7a94-7b22-4baa-b32d-11e9ecc4221c",
];

// Danh sách các tin với giá trị sao chép khác
const newsItems = [
  { description: "Tài khoản iCloud", copyValue: "activelocketgold@gmail.com" },
  { description: "Mật khẩu", copyValue: "LocketGold2233" },
  {
    description: "Chứng chỉ Egern 2024",
    copyValue: "https://apptesters.org/egern.yaml",
  },
  {
    description: "Chứng chỉ Egern 2006",
    copyValue: "https://aqvpn.me/scripts/locket.yaml",
  },
];
const instructions = [
  "Bước 1: Chọn mục <u>Phương tiện mục mua</u>",
  "Bước 2: Chọn <u>Đăng xuất</u>",
  "Bước 3: Chọn <u>Không phải</u>",
  "Bước 4: Nhập <u>tài khoản</u> và <u>mật khẩu</u> bấm <u>tiếp tục</u> để <u>đăng nhập</u>",
  "Bước 5: Khi đã <u>đăng nhập</u> xong.",
  "Bước 6: Vào <u>Appstore</u> vào mục <u>ứng dụng</u> hoặc <u>đã mua</u> (tuỳ thiết bị)",
  "Bước 7: Chọn tài khoản <u>Đôi</u>",
  "Bước 8: Tìm kiếm và tải app<u> Egern</u>.",
  "Bước 9: Mở app <u>Egern</u> vào phần <u>Công cụ</u> chọn phần <u>Chứng chỉ</u>.",
  "Bước 10: Bấm <u>tạo mới chứng chỉ</u>.",
  "Bước 11: Bấm <u>tạo mới</u>.",
  "Bước 12: Chọn <u>tải về chứng chỉ</u>.",
  "Bước 13: Chọn <u>cho phép</u>.",
  "Bước 14: Quay lại <u>Cài đặt</u> và click vào <u>Đã tải về hồ sơ</u>.",
  "Bước 15: Thực hiện <u>cài đặt</u>.",
  "Bước 16: Sau khi <u>cài đặt</u> xong quay lại “<u>Giới thiệu</u>” lướt xuống dưới cùng chọn phần này.",
  "Bước 17: Tiến hành bật <u>tin cậy</u> và chọn <u>Tiếp tục</u>.",
  "Bước 18: Quay lại <u>Egern</u> và tiến hành tải <u>chứng chỉ</u> xuống.",
  "Bước 19: Dán 1 trong 2 <u>đường link</u> dưới và bấm nút <u>Tải</u>.",
  "Bước 20: Quay lại <u>app Egern</u> mục <u>phân tích</u> bấm <u>Bắt đầu</u>.",
  "Bước 21: Chọn <u>cho phép cấu hình VPN</u>.",
  "Bước 22: Đợi 1-2s và mở <u>app Locket</u> tận hưởng <u>Locket Gold</u> nào :3.",
];

const Guide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = images[0];
    img.onload = () => setLoading(false);
  }, []);
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  const copyToClipboard = (text) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          Swal.fire({
            title: "Sao chép thành công!",
            text: "Thông tin đã được sao chép vào clipboard.",
            icon: "success",
            confirmButtonText: "OK",
            timer: 2000,
          });
        })
        .catch((err) => {
          console.error("Lỗi khi sao chép:", err);
          Swal.fire({
            title: "Lỗi!",
            text: "Không thể sao chép thông tin, vui lòng thử lại.",
            icon: "error",
            confirmButtonText: "OK",
          });
        });
    } else {
      Swal.fire({
        title: "Không hỗ trợ sao chép",
        text: "Thiết bị của bạn không hỗ trợ sao chép tự động. Vui lòng sao chép thủ công.",
        icon: "info",
        confirmButtonText: "OK",
      });
    }
  };
  if (loading) {
    return <Loading />;
  }
  return (
    <>
          {/* Tạo phần tử để cách header */}
          <div className="h-10" />
      <div className="relative w-full max-w-md mx-auto bg-gray-800 p-11 shadow-lg">
        <h1 className="text-2xl font-bold text-white mb-4 text-center">
          Hướng Dẫn
        </h1>
        <div className="relative w-full aspect-w-9 aspect-h-16 overflow-hidden mb-6">
          <div
            className="relative w-full h-full flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            ))}
          </div>
        </div>

        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:shadow-xl focus:outline-none transition-transform duration-150 ease-in-out active:scale-95 active:shadow-inner"
        >
          <ArrowLeftIcon />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:shadow-xl focus:outline-none transition-transform duration-150 ease-in-out active:scale-95 active:shadow-inner"
        >
          <ArrowRightIcon />
        </button>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1.5">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-blue-600" : "bg-gray-400"
              } transition-colors`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <Draggable>
        <div className="fixed bottom-4 left-4 right-4 p-5 bg-gray-900 text-white rounded-lg shadow-lg cursor-move rainbow-border-effect">
          <p
            className="font-bold"
            dangerouslySetInnerHTML={{ __html: instructions[currentIndex] }}
          ></p>
        </div>
      </Draggable>

      <div className="max-w-md mx-auto bg-gray-800 p-4 shadow-lg">
        <h2 className="text-lg font-bold text-white mb-4">
          Danh Sách Thông Tin
        </h2>
        {newsItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center mb-4 p-3 bg-gray-600 rounded-lg"
          >
            <div className="flex-1">
              <p className="text-sm text-white mb-1">{item.description}</p>
              <textarea
                readOnly
                value={item.copyValue}
                className="w-full bg-gray-800 text-white p-2 rounded-md border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                rows="1"
              />
            </div>
            <button
              onClick={() => copyToClipboard(item.copyValue)}
              className="ml-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none"
            >
              <ClipBoardIcon />
            </button>
          </div>
        ))}

        <div className="mt-6 text-center text-white my-2">
          <hr className="mb-2"></hr>
          <p className="text-sm">
            Đoạn văn bản này cung cấp thêm thông tin liên quan đến nội dung trên
            trang. Nếu bạn có bất kỳ câu hỏi nào hoặc cần thêm trợ giúp, vui
            lòng liên hệ với chúng tôi.
          </p>
        </div>
      </div>
    </>
  );
};

export default Guide;
