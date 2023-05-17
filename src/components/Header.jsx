import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.svg";

const Header = () => {
  return (
    <header className="py-3 mb-3 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={Logo} alt=" " />
        </Link>

        <div className="flex items-center gap-6">
          <Link className=" hover:text-violet-600 transition " to="">
            Log In
          </Link>
          <Link
            className=" bg-violet-700 text-white hover:bg-violet-900 px-4 py-3 rounded-lg transition "
            to=""
          >
            Sign Out
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
