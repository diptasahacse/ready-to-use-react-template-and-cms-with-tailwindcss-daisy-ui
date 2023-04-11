import React, { Children } from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
const DashboardLayout = () => {
  return (
    <div>
      <div className="flex h-screen">
        <div className="sidebar-part">
          <Sidebar />
        </div>
        <div className="overflow-y-auto">
          <Navbar />
          <div className="p-5 bg-gray-400">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
