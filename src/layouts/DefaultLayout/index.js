import React from 'react';

import DefaultHeader from "../../components/Default/DefaultHeader"
import Footer from "../../components/Default/DefaultFooter"
import BottomNavigation from '../../components/Default/BottomNavigation';

const DefaultLayout = ({ children }) => {
  return (
    <>
      <DefaultHeader />
      <div>{children}</div>
      {/* <BottomNavigation/> */}
      <Footer />
    </>
  );
};

export default DefaultLayout;
