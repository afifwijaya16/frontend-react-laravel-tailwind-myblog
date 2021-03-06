import React from "react";
import * as FaIcons from "react-icons/fa";
import SubMenu from "./SubMenu";
import { SidebarData } from "./SidebarData";
const Sidebar = ({ sidebar, showSidebar }) => {
  return (
    <>
      <div
        className={`h-full fixed top-0 left-0 w-72 bg-gray-50 shadow-lg z-50 lg:block ${
          sidebar ? "hidden" : ""
        }`}
      >
        <div className="flex py-5 justify-center align-center bg-gray-100 shadow-sm">
          <div className="w-5/6">
            <div
              className="w-full text-center text-black
                font-bold text-base uppercase "
            >
              Dashboard
            </div>
          </div>
          <div className="w-1/6">
            <FaIcons.FaTimes
              className="w-6 h-6 text-black cursor-pointer hover:text-red-600 lg:hidden"
              onClick={showSidebar}
            />
          </div>
        </div>
        <div className="overflow-y-auto h-90v p-4">
          {SidebarData.map((item, index) => {
            return <SubMenu item={item} key={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
