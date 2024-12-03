import React from "react";

function UpgradeiCloud() {
  return (
    <>
    <div className="h-14"/>
      <div className="relative flex justify-center items-start h-screen bg-gray-50">
        <video
          src="/images/video/fpo@1x.mp4"
          width="430"
          height="388"
          autoPlay
          muted // Thêm thuộc tính muted để video tự động phát
          playsInline
          loop
          x-webkit-airplay="deny"
          title="Hình minh họa Memoji của những người dùng khác nhau, bao quanh là biểu tượng của những ứng dụng mỗi người dùng sử dụng nhiều nhất"
        />
      </div>
    </>
  );
}

export default UpgradeiCloud;
