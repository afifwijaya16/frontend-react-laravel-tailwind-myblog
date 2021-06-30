import React, { useState, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import Swal from "sweetalert2";
import {
  getCategories,
  getCategorySearch,
  removeCategory,
} from "../../function/category";
import { Link } from "react-router-dom";
const TableCategory = () => {
  const [categories, setCategories] = useState([]);
  const [informationCategories, setInformationCategories] = useState([]);
  const [filteredData, setFilteredData] = useState(categories);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const loadCategories = () => {
    setLoading(true);
    getCategories()
      .then((res) => {
        setCategories(res.data.data.data);
        setInformationCategories(res.data);
        setFilteredData(res.data.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };
  console.log(informationCategories);
  useEffect(() => {
    loadCategories();
  }, []);

  const handleRemove = (id) => {
    setLoading(true);
    Swal.fire({
      title: "Are you sure delete this data ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        removeCategory(id)
          .then((res) => {
            setLoading(false);
            Swal.fire(
              "Deleted!",
              `${res.data.data.category} has been deleted`,
              "success"
            );
            loadCategories();
          })
          .catch((err) => {
            setLoading(false);
          });
      } else {
        setLoading(false);
      }
    });
  };

  const searchCategoriesData = (search) => {
    setLoading(true);
    getCategorySearch(search)
      .then((res) => {
        setFilteredData(res.data.data.data);
        setInformationCategories(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value.toLowerCase());
    const query = e.target.value;
    if (!query) {
      loadCategories();
    } else {
      searchCategoriesData(query);
    }
  };

  return (
    <div className="block overflow-x-auto mt-5">
      <div className="w-full flex justify-end my-3">
        <div className="w-1/2">
          <div className="block relative">
            <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
              <FaIcons.FaSearch className="h-4 w-4 fill-current text-gray-500" />
            </span>
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={handleSearchChange}
              className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
            />
          </div>
        </div>
      </div>
      <table className="w-full text-left rounded-lg">
        <thead>
          <tr className="bg-gray-700 text-gray-200 border border-b-0">
            <th className="px-4 py-3">No</th>
            <th className="px-4 py-3">Category</th>
            <th className="px-4 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr className="w-full font-light text-gray-700 bg-gray-100 whitespace-no-wrap border border-b-0">
              <td className="px-4 py-3 text-center " colSpan="3">
                <div className="flex justify-center items-center">
                  <FaIcons.FaSpinner className="animate-spin mr-2" /> Loading
                </div>
              </td>
            </tr>
          ) : (
            filteredData.map((item, index) => {
              return (
                <tr
                  key={index}
                  className="w-full font-light text-gray-700 bg-gray-100 whitespace-no-wrap border border-b-0"
                >
                  <td className="px-4 py-3">{index + 1}</td>
                  <td className="px-4 py-3">{item.category}</td>
                  <td className="text-center">
                    <div className="flex item-center justify-center">
                      <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
                        <Link to={`/category/update/${item.id}`}>
                          <FaIcons.FaEdit />
                        </Link>
                      </div>
                      <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
                        <FaIcons.FaTrash
                          onClick={() => handleRemove(item.id)}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
      <div className="w-full flex justify-between">
        <div className="flex items-center">
          <h1>Total Data : {informationCategories.data.total}</h1>
        </div>
      </div>
    </div>
  );
};

export default TableCategory;
