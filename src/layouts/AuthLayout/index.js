import React from 'react';

import AuthHeader from '../../components/Auth/Header';
import Footer from '../../components/Auth/Footer';

const AuthLayout = ({ children }) => {
    return (
      <div>
        <AuthHeader />
        <main>{children}</main>
        <Footer />
      </div>
    );
  };
  
  export default AuthLayout;
