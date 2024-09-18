import React from 'react';

import DefaultHeader from "../../components/Default/Header"
import Footer from "../../components/Default/Footer"

const DefaultLayout = ({ children }) => {
  return (
    <>
      <DefaultHeader />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default DefaultLayout;
