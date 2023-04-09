import React, { Children } from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
const DashboardLayout = () => {
  return (
    <div className="drawer drawer-mobile ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* <!-- Page content here --> */}
        <div>
          <Navbar />

          <Outlet />
        </div>
      </div>
      <div className="drawer-side overflow-hidden">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

        {/* <!-- Sidebar content here --> */}
        <div className="menu w-80 bg-base-200 text-base-content">
          <div>
            <div className="bg-gray-400 z-10 py-5 mb-5 sticky top-0">Brand Name</div>

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
                <li>
                  <Link to="/dashboard/users">Users</Link>
                </li>
                <li>
                  <Link to="/dashboard/users">Users</Link>
                </li>
                <li>
                  <Link to="/dashboard/users">Users</Link>
                </li>
                <li>
                  <Link to="/dashboard/users">Users</Link>
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
