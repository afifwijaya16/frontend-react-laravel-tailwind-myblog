import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
// import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as BsIcons from "react-icons/bs";
import * as CgIcons from "react-icons/cg";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome className="w-5 h-5 rounded-full" />,
  },
  {
    title: "Profile",
    path: "/profile",
    icon: <CgIcons.CgProfile className="w-5 h-5 rounded-full" />,
  },
  {
    title: "Data Master",
    icon: <AiIcons.AiFillDashboard className="w-5 h-5 rounded-full" />,
    iconClosed: <RiIcons.RiArrowDownFill />,
    iconOpened: <RiIcons.RiArrowUpFill />,
    subNav: [
      {
        title: "Category",
        path: "/category",
        icon: <FaIcons.FaListAlt className="w-5 h-5 rounded-full" />,
      },
      {
        title: "Post",
        path: "/post",
        icon: <BsIcons.BsFilePost className="w-5 h-5 rounded-full" />,
      },
    ],
  },
];
