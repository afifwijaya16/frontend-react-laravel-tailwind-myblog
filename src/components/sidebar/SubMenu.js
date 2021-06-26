import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => {
    setSubnav(!subnav);
  };
  return (
    <>
      <Link
        to={item.subNav ? "#" : item.path}
        onClick={item.subNav && showSubnav}
        class="flex items-center justify-between p-2 hover:bg-gray-200 rounded-lg transition-all"
      >
        <div className="flex items-center">
          {item.icon}
          <span class="ml-4 font-semibold">{item.title}</span>
        </div>
        <div className="flex items-center">
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : ""}
        </div>
      </Link>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <Link
              className="flex items-center justify-between p-2 hover:bg-gray-200 rounded-lg transition-all px-5 mx-5"
              to={item.path}
              key={index}
            >
              <div className="flex items-center">
                {item.icon}
                <span className="ml-4">{item.title}</span>
              </div>
            </Link>
          );
        })}
    </>
  );
};

export default SubMenu;
