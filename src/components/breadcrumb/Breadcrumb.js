import React from "react";
import { Link } from "react-router-dom";
const Breadcrumb = ({ title }) => {
  return (
    <div>
      <div className="flex p-3 w-full bg-gray-200 rounded">
        <ul className="ml-auto flex text-gray-500 text-sm lg:text-base">
          <li className="inline-flex items-center">
            <Link to="/" className="font-bold text-gray-900">
              Home
            </Link>
            <svg
              className="h-5 w-auto text-gray-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </li>
          <li className="inline-flex items-center">
            <Link to="/category" className="text-gray-600">
              {title}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Breadcrumb;
