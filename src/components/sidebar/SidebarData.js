import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: "Data Master",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownFill />,
    iconOpened: <RiIcons.RiArrowUpFill />,
    subNav: [
      {
        title: "Users",
        path: "/overview/users",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Revenue",
        path: "/overview/revenue",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Reports",
    icon: <AiIcons.AiFillFile />,
    iconClosed: <RiIcons.RiArrowDownFill />,
    iconOpened: <RiIcons.RiArrowUpFill />,
    subNav: [
      {
        title: "Reports 1",
        path: "/reports/report1",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Reports 2",
        path: "/reports/report2",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Reports 3",
        path: "/reports/report3",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Products",
    path: "/products",
    icon: <FaIcons.FaCartPlus />,
  },
  {
    title: "Team",
    path: "/team",
    icon: <IoIcons.IoMdPeople />,
  },
];
