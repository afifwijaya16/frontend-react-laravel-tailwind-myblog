import React from "react";
import * as FaIcons from "react-icons/fa";

const Sidebar = ({ sidebar, showSidebar }) => {
  console.log("ini sidebar dari sidebar");
  return (
    <>
      <div
        className={`fixed left-0 top-0 w-72 h-full bg-gray-800 shadow-lg z-50 lg:block ${
          sidebar ? "hidden" : ""
        }`}
      >
        <div className="flex py-5 justify-center align-center">
          <div className="w-5/6">
            <div
              className="w-full text-center text-white 
                font-bold text-base uppercase "
            >
              Dashboard
            </div>
          </div>
          <div className="w-1/6">
            <FaIcons.FaTimes
              className="w-6 h-6 text-white cursor-pointer hover:text-red-600 lg:hidden"
              onClick={showSidebar}
            />
          </div>
        </div>
        <div className="flex h-screen"></div>
      </div>
    </>
  );
};

export default Sidebar;
