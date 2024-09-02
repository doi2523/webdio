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

function App() {
  return (
    <AuthProvider>
      <Router>
        <PageWrapper />
      </Router>
    </AuthProvider>
  );
}

const PageWrapper = () => {
  const { user, loading, role, isVerified } = useAuth(); // Thêm 'role' vào từ context
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (loading || isLoading) {
    return <Loading />;
  }

  let Layout;

  if (!user) {
    Layout = DefaultLayout;
  } else if (!isVerified) {
    // Hiển thị layout yêu cầu xác minh email
    // Layout = AuthLayout;
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
      </Routes>
    </Layout>
  );
};

export default App;
