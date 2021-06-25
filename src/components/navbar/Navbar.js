import React from "react";
import * as FaIcon from "react-icons/fa";
const Navbar = () => {
  return (
    <>
      <div className="h-16 shadow-sm pl-8 lg:pl-80 fixed w-full top-0 left-0 flex items-center z-50">
        <div class="w-6 cursor-pointer lg:hidden">
          <FaIcon.FaBars class="h-6 w-6" />
        </div>
        <div class="relative hidden lg:block lg:transition">
          <FaIcon.FaSearch class="absolute left-2 top-3 w-6 text-gray-400" />
          <input
            type="text"
            class="block w-72 shadow border-none rounded-3xl focus:outline-none py-2 bg-gray-200 text-base text-gray-600 pl-11 pr-5"
            placeholder="Search"
          />
        </div>
        <div class="ml-auto items-center flex">
          <div>
            <FaIcon.FaBell class="w-6 cursor-pointer text-gray-600" />
          </div>
          <div class="mx-4 relative">
            <div class="cursor-pointer">
              <img
                class="h-8 w-8 rounded-full object-cover"
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
