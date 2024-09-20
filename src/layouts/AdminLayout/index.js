import React from 'react';
// import AdminHeader from '../components/Admin/Header';
// import AdminFooter from '../components/Admin/Footer';

import AdminHeader from '../../components/Admin/AdminHeader';
import Footer from '../../components/Admin/AdminFooter';

const AdminLayout = ({ children }) => {
  return (
    <>
      <AdminHeader/>
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default AdminLayout;
