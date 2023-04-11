import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDashboard } from "../../../../redux/actionCreators/dashboardActions";

const Sidebar = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const {
    dashboard: { sideBarOpen },
  } = state;

  return (
    <>
      <div
        class={`sidebar  ${!sideBarOpen && "hidden"} lg:left-0 p-2 ${
          !sideBarOpen && "-translate-x-full"
        } h-screen w-[300px] overflow-y-auto text-center bg-neutral`}
      >
        <div class="text-gray-100 text-xl">
          <div class="p-2.5 mt-1 flex items-center">
            <span className="brand-logo relative inline-block bg-blue-600 h-5 w-5 rounded-r-lg"></span>
            <h1 class="font-bold text-[#c4c8d3] text-[15px] ml-3">
              Dipta Theme
            </h1>
            <i
              class="ri-arrow-left-line cursor-pointer ml-28 lg:hidden"
              onClick={() => dispatch(toggleDashboard())}
            ></i>
          </div>
          <div class="my-2 bg-gray-600 h-[1px]"></div>
        </div>
        
        <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-[#ffffff1a] text-[#c4c8d3]">
          <i class="ri-speed-up-line"></i>
          <span class="text-[15px] ml-4 text-[#c4c8d3] font-bold">Dashboard</span>
        </div>
        <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-[#ffffff1a] text-[#c4c8d3]">
          <i class="ri-admin-line"></i>
          <span class="text-[15px] ml-4 text-[#c4c8d3] font-bold">Admin</span>
        </div>
        <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-[#ffffff1a] text-[#c4c8d3]">
          <i class="ri-user-fill"></i>
          <span class="text-[15px] ml-4 text-[#c4c8d3] font-bold">Users</span>
        </div>
        <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-[#ffffff1a] text-[#c4c8d3]">
          <i class="ri-service-line"></i>
          <span class="text-[15px] ml-4 text-[#c4c8d3] font-bold">Products</span>
        </div>
        <div class="my-4 bg-gray-600 h-[1px]"></div>
      
       
        <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer text-error">
          <i class="ri-logout-circle-line"></i>
          <span class="text-[15px] ml-4 text-error font-bold">Logout</span>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
