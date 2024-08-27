import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import Loading from '../components/Loading';

const PrivateRoute = ({ children }) => {
  const { user, isVerified, loading, role } = useAuth(); // Thêm 'role' vào từ context
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }

  // Nếu người dùng đã đăng nhập và xác minh email
  if (user && isVerified) {
    if (location.pathname === '/login') {
      // Nếu người dùng là admin và đang cố gắng truy cập trang đăng nhập, chuyển hướng đến trang admin
      if (role === 'admin') {
        return <Navigate to="/admin" />;
      }
      // Nếu người dùng không phải là admin, chuyển hướng đến trang của người dùng đã đăng nhập
      return <Navigate to="/auth" />;
    }

    // Hiển thị nội dung của tuyến riêng tư dựa trên vai trò
    return children;
  }

  // Nếu người dùng chưa đăng nhập hoặc chưa xác minh, chuyển hướng đến /login
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
