import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleDashboard } from "../../../../redux/actionCreators/dashboardActions";

const Navbar = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const {
    dashboard: { sideBarOpen },
  } = state;
  return (
    <div className="navbar sticky border-b border-[#f1f5f90d] top-0 bg-neutral">
      <div className="flex-1">
        <span
          className=" text-2xl cursor-pointer"
          onClick={() => dispatch(toggleDashboard())}
        >
          <i
            className={`${
              sideBarOpen ? "ri-menu-fold-line" : "ri-menu-unfold-line"
            } px-2 text-gray-400 rounded-md`}
          ></i>
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
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-neutral border border-[#f1f5f90d] rounded-box z-50 w-52"
          >
            <li>
              <Link to="profile">Profile</Link>
            </li>
            <li>
              <Link to="settings">Settings</Link>
            </li>
            <li>
              <Link to="/">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
