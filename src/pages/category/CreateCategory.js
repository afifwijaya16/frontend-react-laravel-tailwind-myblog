import React, { useState } from "react";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
const CreateCategory = () => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="h-90v overflow-y-auto pt-5 pb-5 pl-8 pr-8 lg:pl-80 z-10">
      <div>
        <Breadcrumb title="Create Category" />
        <div className="flex items-center mt-4">
          <Link
            to="/category"
            className="bg-blue-600 text-gray-200 rounded hover:bg-blue-500 px-4 py-1 focus:outline-none
            flex items-center"
          >
            <FaIcons.FaArrowLeft className="mr-2" /> Back
          </Link>
        </div>
        <div>
          <div className="my-5">
            <form onSubmit={handleSubmit}>
              <div className="w-full rounded">
                <div className="bg-white px-4 py-4 my-2 rounded-lg shadow-lg">
                  <label className="text-gray-600 font-light">Category</label>
                  <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    placeholder="Enter your input here"
                    className="w-full mt-2 mb-6 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-900"
                  />
                  <button
                    className="bg-green-600 text-gray-200 rounded hover:bg-green-500 px-4 py-1 focus:outline-none
                    flex items-center"
                  >
                    <FaIcons.FaSave className="mr-2" /> Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCategory;
