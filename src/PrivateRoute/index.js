import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../AuthContext'; // Đảm bảo đường dẫn đến AuthContext.js là đúng
import Loading from '../components/Loading';

const PrivateRoute = ({ children }) => {
  const { user, isVerified, loading } = useAuth();
  const location = useLocation(); // Lấy location để giữ lại URL hiện tại

  // Xử lý trạng thái loading
  if (loading) {
    return <Loading />;
  }

  // Nếu người dùng đã đăng nhập và xác minh email
  if (user && isVerified) {
    // Nếu người dùng cố gắng truy cập /login, chuyển hướng đến /auth
    if (location.pathname === '/login') {
      return <Navigate to="/auth" />;
    }

    // Hiển thị nội dung của tuyến riêng tư
    return children;
  }

  // Nếu người dùng chưa đăng nhập hoặc chưa xác minh, chuyển hướng đến /login
  return <Navigate to="/login" />;
};

export default PrivateRoute;
