import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { publicRoutes, privateRoutes, adminRoutes } from '../../Routes';

const usePageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    // Kết hợp tất cả các route lại
    const allRoutes = [...publicRoutes, ...privateRoutes, ...adminRoutes];

    // Tìm tiêu đề dựa trên đường dẫn hiện tại
    const currentRoute = allRoutes.find(route => route.path === location.pathname);

    // Cập nhật tiêu đề trang
    document.title = currentRoute?.title || 'Webdio';
  }, [location.pathname]);
};

export default usePageTitle;
