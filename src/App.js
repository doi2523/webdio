import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { publicRoutes, privateRoutes } from './Routes';
import { AuthProvider, useAuth } from './AuthContext';
import AuthHeader from './components/Auth/Header';
import Header from './components/Default/Header';
import Footer from './components/Default/Footer';
import Loading from './components/Loading';
import PrivateRoute from './PrivateRoute';
import RedirectIfLoggedIn from './RedirectIfLoggedIn';

function App() {
  return (
    <AuthProvider>
      <Router>
        <HeaderWrapper />
        <PageWrapper />
        <Footer />
      </Router>
    </AuthProvider>
  );
}

const HeaderWrapper = () => {
  const { user, loading, isVerified } = useAuth();

  if (loading) {
    return <Loading />;
  }

  if (user && isVerified) {
    return <AuthHeader />;
  } 

  return <Header />;
};

const PageWrapper = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Thời gian hiển thị trang Loading, có thể tùy chỉnh

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className='App'>
      <Routes>
        {/* Render public routes */}
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

        {/* Render private routes */}
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
            >
              {route.children &&
                route.children.map((child, childIndex) => {
                  const ChildPage = child.component;
                  return (
                    <Route
                      key={childIndex}
                      path={child.path}
                      element={<ChildPage />}
                    />
                  );
                })}
            </Route>
          );
        })}
      </Routes>
    </div>
  );
};

export default App;
