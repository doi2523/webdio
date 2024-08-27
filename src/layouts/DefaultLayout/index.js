import React from 'react';

import Header from "../../components/Default/Header"
import Footer from "../../components/Default/Footer"

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default DefaultLayout;
