import React, { Children } from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
const DashboardLayout = () => {
  return (
    <div className="drawer drawer-mobile ">
      <input
        id="dashboard-layout-toggle"
        type="checkbox"
        className="drawer-toggle"
      />
      <div className="drawer-content">
        {/* <!-- Page content here --> */}
        <div>
          <Navbar />
          <div className="p-4 bg-green-200 h-100">
            <Outlet />
          </div>
        </div>
      </div>
      <div className="drawer-side overflow-hidden">
        <label
          htmlFor="dashboard-layout-toggle"
          className="drawer-overlay"
        ></label>

        {/* <!-- Sidebar content here --> */}
        <div className="menu w-80 bg-base-200 text-base-content">
          <div>
            <div className="bg-gray-400 z-10 py-5 mb-5 sticky top-0">
              Brand Name
            </div>

            {/* Sidebar menu */}
            <div className="p-4">
              <ul>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <Link to="/dashboard/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/dashboard/users">Users</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
