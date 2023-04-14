import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Blogs = () => {
  const userData = useLoaderData();
  console.log();
  return (
    <div className="grid grid-cols-4 gap-4 py-20">
      blogs
      {/* {userData.map((item, index) => (
        <div className="p-4 bg-slate-800" key={index}>
          <h4 className="text-xl font-bold">{item.name}</h4>
          <Link to={`/blogs/${item.id}`}>
          Details
          </Link>
        </div>
      ))} */}
    </div>
  );
};

export default Blogs;
