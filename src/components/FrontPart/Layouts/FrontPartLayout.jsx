import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const FrontPartLayout = ({ children }) => {
  return (
    <div id="front-part">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default FrontPartLayout;
