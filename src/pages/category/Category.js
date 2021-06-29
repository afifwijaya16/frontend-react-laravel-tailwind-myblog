import React from "react";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import TableCategory from "./TableCategory";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
const Category = () => {
  return (
    <div className="h-90v overflow-y-auto pt-5 pb-5 pl-8 pr-8 lg:pl-80 z-10">
      <div>
        <Breadcrumb title="Category" />
        <div className="flex items-center mt-4">
          <Link
            to="/category/create"
            className="bg-blue-600 text-gray-200 rounded hover:bg-blue-500 px-4 py-1 focus:outline-none
            flex items-center"
          >
            <FaIcons.FaPlus className="mr-2" /> Create
          </Link>
        </div>
        <TableCategory />
      </div>
    </div>
  );
};

export default Category;
