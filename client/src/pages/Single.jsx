import React from "react";
import Edit from "../img/edit.svg";
import Delete from "../img/delete.svg";
import { Link } from "react-router-dom";

const Single = () => {
  return (
    <div className="flex gap-12">
      <div className="flex-[5_5_0%] flex flex-col gap-7">
        <img
          className="w-full h-72 object-cover"
          src="https://images.pexels.com/photos/7661590/pexels-photo-7661590.jpeg"
          alt=""
        />
        <div className="flex items-center gap-2 text-base">
          <div>
            <span className="font-bold">Author</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="flex gap-1">
            <Link to={`/write?edit=2`}>
              <img className="w-7 h-7" src={Edit} alt="Edit button" />
            </Link>
            <Link to={`/write?delete=2`}>
              <img className="w-8 h-8" src={Delete} alt="Delete button" />
            </Link>
          </div>
        </div>
        <h1 className="font-bold text-4xl">Lorem ipsum dolor sit amet</h1>
        <p className="text-lg text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
};

export default Single;
