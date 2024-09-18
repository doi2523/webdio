// ScrollControl.js
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollControl = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/login') {
      // Ẩn thanh cuộn
      // document.body.style.overflow = 'hidden'; 
    } else {
      document.body.style.overflow = 'auto'; // Hiển thị thanh cuộn
    }

    // Dọn dẹp khi component unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [location.pathname]);

  return <>{children}</>;
};

export default ScrollControl;
