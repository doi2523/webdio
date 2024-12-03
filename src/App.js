import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { publicRoutes, privateRoutes, adminRoutes } from './Routes';
import { AuthProvider, useAuth } from './AuthContext';
import DefaultLayout from './layouts/DefaultLayout';
import AuthLayout from './layouts/AuthLayout';
import AdminLayout from './layouts/AdminLayout';
import Loading from './components/Loading';
import PrivateRoute from './PrivateRoute';
import RedirectIfLoggedIn from './RedirectIfLoggedIn';
import ScrollControl from './hooks/ScrollControl';
import UpgradeLayout from './layouts/UpgradeLayout';
import PageNotFound from './pages/Public/PageNotFound';

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollControl>
          <PageWrapper />
        </ScrollControl>
      </Router>
    </AuthProvider>
  );
}

const PageWrapper = () => {
  const { user, loading, role, isVerified } = useAuth();
  const [isInitialLoading, setIsInitialLoading] = useState(true); // Kiểm tra lần tải đầu tiên
  const location = useLocation();

  useEffect(() => {
    if (isInitialLoading) {
      setTimeout(() => {
        setIsInitialLoading(false);
      }, 500); // Hiển thị trang loading trong lần tải đầu tiên
    }
  }, []);

  if (loading || isInitialLoading) {
    return <Loading />;
  }

  let Layout;

  // Kiểm tra nếu địa chỉ bắt đầu bằng '/upgrade'
  if (location.pathname.startsWith('/upgrade')) {
    Layout = UpgradeLayout; // Giả sử bạn đã tạo layout UpgradeLayout
  } else if (!user) {
    Layout = DefaultLayout;
  } else if (!isVerified) {
    Layout = DefaultLayout;
  } else if (role === 'admin') {
    Layout = AdminLayout;
  } else {
    Layout = AuthLayout;
  }

  return (
    <Layout>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <RedirectIfLoggedIn>
                  <Page />
                </RedirectIfLoggedIn>
              }
            />
          );
        })}

        {privateRoutes.map((route, index) => {
          const Page = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <PrivateRoute>
                  <Page />
                </PrivateRoute>
              }
            />
          );
        })}

        {role === 'admin' &&
          adminRoutes.map((route, index) => {
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <PrivateRoute>
                    <Page />
                  </PrivateRoute>
                }
              />
            );
          })}

        {/* Route 404 cho các đường dẫn không tồn tại */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Layout>
  );
};

export default App;
