import React from 'react';
// import AdminHeader from '../components/Admin/Header';
// import AdminFooter from '../components/Admin/Footer';

import Header from '../../components/Admin/Header';
import Footer from '../../components/Admin/Footer';

const AdminLayout = ({ children }) => {
  return (
    <>
      <Header/>
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default AdminLayout;
