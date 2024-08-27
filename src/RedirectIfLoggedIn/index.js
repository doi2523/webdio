import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { publicRoutes } from '../Routes';

const RedirectIfLoggedIn = ({ children }) => {
  const { user, isVerified, loading, role } = useAuth(); // Thêm 'role' vào từ context
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (loading) return;

    const isPublicPath = publicRoutes.some(route => route.path === location.pathname);

    if (user && isVerified && isPublicPath) {
      // Điều hướng dựa trên vai trò của người dùng
      if (role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/auth');
      }
    }
  }, [user, isVerified, loading, role, location.pathname, navigate]);

  return children;
};

export default RedirectIfLoggedIn;
