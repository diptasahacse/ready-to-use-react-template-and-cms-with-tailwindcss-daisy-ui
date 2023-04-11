import React, { Children } from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
const DashboardLayout = () => {
  return (
    <div>
      <div>
        <Sidebar />
        <Outlet/>
      </div>
    </div>
  );
};

export default DashboardLayout;
