import React from "react";
import * as FaIcon from "react-icons/fa";
const Sidebar = () => {
  return (
    <>
      <div className="fixed left-0 top-0 w-72 h-full bg-gray-800 shadow-md z-50 transition">
        <div class="flex py-5 justify-center align-center">
          <div class="w-5/6">
            <div
              className="w-full text-center text-white 
                font-bold text-base uppercase "
            >
              Dashboard
            </div>
          </div>
          <div class="w-1/6">
            <FaIcon.FaTimes className="w-6 h-6 text-white cursor-pointer hover:text-red-600" />
          </div>
        </div>
        <div className="flex h-screen"></div>
      </div>
    </>
  );
};

export default Sidebar;
