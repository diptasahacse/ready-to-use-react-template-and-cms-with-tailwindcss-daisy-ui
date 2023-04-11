import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleDashboard } from "../../../../redux/actionCreators/dashboardActions";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <div className="navbar sticky border-b border-[#2c385a] top-0 bg-neutral">
      <div className="flex-1">
        <span
          class=" text-2xl cursor-pointer"
          onClick={() => dispatch(toggleDashboard())}
        >
          <i class="ri-menu-3-line px-2 text-gray-400 rounded-md"></i>
        </span>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="/images/dipta.jpg" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-neutral border border-[#2c385a] rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
