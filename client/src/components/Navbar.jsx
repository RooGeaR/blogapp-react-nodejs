import React from "react";
import Logo from "../img/blog-app-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center pl-0 pr-2.5">
        <div>
          <Link to="/">
            <img src={Logo} className="w-28" alt="Logo Blog App" />
          </Link>
        </div>
        <div className="flex items-center gap-2.5">
          <span className="font-light bg-orange-500 rounded-full w-12 h-12 flex items-center justify-center hover:text-orange-400 hover:bg-white hover:border-orange-500 border-2">
            <Link to="write">Write</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
