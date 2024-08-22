import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { publicRoutes } from '../Routes'; // Đảm bảo đường dẫn đến Routes.js là đúng

const RedirectIfLoggedIn = ({ children }) => {
  const { user, isVerified, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Nếu đang trong trạng thái loading, không thực hiện điều hướng
    if (loading) return;

    // Kiểm tra nếu người dùng đã đăng nhập và đang ở một trong các đường dẫn công khai
    const isPublicPath = publicRoutes.some(route => route.path === location.pathname);
    if (user && isVerified && isPublicPath) {
      // Nếu người dùng đã đăng nhập và đang ở một trong các đường dẫn công khai, chuyển hướng đến /auth
      navigate('/auth');
    }
  }, [user, isVerified, loading, location.pathname, navigate]);

  // Nếu chưa tải xong hoặc điều hướng đã được thực hiện, hiển thị nội dung
  return children;
};

export default RedirectIfLoggedIn;
