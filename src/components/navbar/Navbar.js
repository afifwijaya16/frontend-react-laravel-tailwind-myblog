import React from "react";
import * as FaIcons from "react-icons/fa";
const Navbar = ({ showSidebar }) => {
  console.log("ini sidebar dari nav");
  return (
    <>
      <div className="h-16 shadow-sm pl-8 lg:pl-80 fixed w-full top-0 left-0 flex items-center z-50">
        <div className="w-6 cursor-pointer lg:hidden">
          <FaIcons.FaBars
            className="h-6 w-6 hover:text-red-600"
            onClick={showSidebar}
          />
        </div>
        <div className="relative hidden lg:block lg:transition">
          <FaIcons.FaSearch className="absolute left-2 top-3 w-6 text-gray-400" />
          <input
            type="text"
            className="block w-72 shadow border-none rounded-3xl focus:outline-none py-2 bg-gray-200 text-base text-gray-600 pl-11 pr-5"
            placeholder="Search"
          />
        </div>
        <div className="ml-auto items-center flex">
          <div>
            <FaIcons.FaBell className="w-6 cursor-pointer text-gray-600" />
          </div>
          <div className="mx-4 relative">
            <div className="cursor-pointer">
              <img
                className="h-8 w-8 rounded-full object-cover"
                src="https://ui-avatars.com/api/?name=Afif+Wijaya?background=0D8ABC&color=2980b9"
                alt="avatar"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
