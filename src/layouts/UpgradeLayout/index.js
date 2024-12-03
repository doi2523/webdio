import React from 'react';

import DefaultHeader from "../../components/Default/DefaultHeader"
import Footer from "../../components/Default/DefaultFooter"
import BottomNavigation from '../../components/Default/BottomNavigation';

const UpgradeLayout = ({ children }) => {
  return (
    <>
    <DefaultHeader/>
      <BottomNavigation />
      <div>{children}</div>
      {/* <BottomNavigation/> */}
      <Footer />
    </>
  );
};

export default UpgradeLayout;
