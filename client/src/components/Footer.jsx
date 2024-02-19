import React from "react";
import Logo from "../img/blog-app-logo.png";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between mt-20 p-5 bg-orange-400 text-xs">
      <img className="w-14" src={Logo} alt="Blog Logo App" />
      <span>Made with <b>React.js</b></span>
    </footer>
  );
};

export default Footer;
