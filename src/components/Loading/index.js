// components/Loading/index.js
import React from 'react';

const Loading = () => {
  const spinnerStyle = {
    width: '80px', // Điều chỉnh kích thước theo nhu cầu
    height: '80px', // Điều chỉnh kích thước theo nhu cầu
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <span className="loading loading-infinity" style={spinnerStyle}></span>
    </div>
  );
};

export default Loading;
