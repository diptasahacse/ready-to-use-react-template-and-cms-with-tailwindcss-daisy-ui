import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleDashboard } from "../../../../redux/actionCreators/dashboardActions";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <div className="navbar sticky top-0 bg-base-100">
      <div className="flex-1">
        <span
          class=" text-white text-4xl cursor-pointer"
          onClick={() => dispatch(toggleDashboard())}
        >
          <i class="ri-menu-3-line px-2 text-gray-800 rounded-md"></i>
        </span>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered"
          />
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
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
