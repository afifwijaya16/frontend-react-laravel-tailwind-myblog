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
        className="flex justify-between items-center px-5 py-4 text-white border-1-4 bg-gray-900 hover:text-yellow-600"
        to={item.subNav ? "#" : item.path}
        onClick={item.subNav && showSubnav}
      >
        <div className="flex items-center">
          {item.icon}
          <span className="ml-4">{item.title}</span>
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
              className="flex items-center px-5 mx-5 pb-3 pt-1 text-white hover:text-yellow-600"
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
