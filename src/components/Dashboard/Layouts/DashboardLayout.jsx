import React, { Children } from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
const DashboardLayout = () => {
  return (
    <div>
      <div className="flex h-screen">
        <div>
          <Sidebar />
        </div>
        <div className="overflow-y-auto">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
