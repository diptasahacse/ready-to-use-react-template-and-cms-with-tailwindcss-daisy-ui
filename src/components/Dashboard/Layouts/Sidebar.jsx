import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDashboard } from "../../../../redux/actionCreators/dashboardActions";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const {
    dashboard: { sideBarOpen },
  } = state;

  return (
    <>
      <div
        class={`sidebar  border-r border-[#f1f5f90d]  ${
          !sideBarOpen && "hidden"
        } lg:left-0  ${
          !sideBarOpen && "-translate-x-full"
        } h-screen w-[270px] overflow-y-auto text-center bg-neutral`}
      >
        <div className="text-gray-100 text-xl sticky top-0 bg-neutral">
          <div className="p-2.5 mt-1 flex items-center">
            <span className="brand-logo relative inline-block bg-blue-600 h-5 w-5 rounded-r-lg"></span>
            <h1 className="font-bold text-[#c4c8d3] text-[15px] ml-3">
              Dipta Theme
            </h1>
            <i
              className="ri-arrow-left-line cursor-pointer ml-28 lg:hidden"
              onClick={() => dispatch(toggleDashboard())}
            ></i>
          </div>
         
        </div>
        <div className="p-2">
          <Link
            to="/dashboard"
            className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-[#ffffff1a] text-[#c4c8d3]"
          >
            <i className="ri-speed-up-line"></i>
            <span className="text-[15px] ml-4 text-[#c4c8d3] font-bold">
              Dashboard
            </span>
          </Link>

          <Link
            to="users"
            className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-[#ffffff1a] text-[#c4c8d3]"
          >
            <i className="ri-user-fill"></i>
            <span className="text-[15px] ml-4 text-[#c4c8d3] font-bold">
              Users
            </span>
          </Link>
          <Link
            to="blogs"
            className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-[#ffffff1a] text-[#c4c8d3]"
          >
            <i className="ri-service-line"></i>
            <span className="text-[15px] ml-4 text-[#c4c8d3] font-bold">
              Blogs
            </span>
          </Link>
          <Link
            to="settings"
            className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-[#ffffff1a] text-[#c4c8d3]"
          >
            <i className="ri-settings-3-fill"></i>
            <span className="text-[15px] ml-4 text-[#c4c8d3] font-bold">
              Settings
            </span>
          </Link>

          <div>
          
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer text-error">
              <i className="ri-logout-circle-line"></i>
              <span className="text-[15px] ml-4 text-error font-bold">
                Logout
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
