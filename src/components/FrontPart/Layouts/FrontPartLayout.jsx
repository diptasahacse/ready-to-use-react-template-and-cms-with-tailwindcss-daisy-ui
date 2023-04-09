import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const FrontPartLayout = ({ children }) => {
  return (
    <div>
      <div>
        <Header />
        <div>{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default FrontPartLayout;
