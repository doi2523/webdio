import React from 'react';

import AuthHeader from '../../components/Auth/AuthHeader';
import Footer from '../../components/Auth/AuthFooter';

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
