import React from 'react';

import DefaultHeader from "../../components/Default/DefaultHeader"
import Footer from "../../components/Default/DefaultFooter"

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
