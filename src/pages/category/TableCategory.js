import React, { useState, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import Swal from "sweetalert2";
import {
  getCategories,
  getCategorySearch,
  removeCategory,
} from "../../function/category";
import { Link } from "react-router-dom";
import Pagination from "../../components/pagination/Pagination";

const TableCategory = () => {
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [limitCategories, setLimiCategories] = useState(5);

  const [totalCategories, setTotalCategories] = useState(0);
  const [linkCategories, setLinkCategories] = useState(0);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const [addrtypeLimit] = useState([5, 10, 100]);
  const Add = addrtypeLimit.map((Add) => Add);

  const loadCategories = () => {
    setLoading(true);
    getCategories(currentPage, limitCategories)
      .then((res) => {
        setCategories(res.data.data.data);
        setLinkCategories(res.data.data.links);
        setTotalCategories(res.data.data.total);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

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
    getCategorySearch(currentPage, search, limitCategories)
      .then((res) => {
        setCategories(res.data.data.data);
        setLinkCategories(res.data.data.links);
        setTotalCategories(res.data.data.total);
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
      setCurrentPage(1);
      searchCategoriesData(query);
    }
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    if (search === "") {
      setLoading(true);
      getCategories(pageNumber, limitCategories)
        .then((res) => {
          setCategories(res.data.data.data);
          setLinkCategories(res.data.data.links);
          setTotalCategories(res.data.data.total);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
        });
    } else {
      setLoading(true);
      getCategorySearch(pageNumber, search, limitCategories)
        .then((res) => {
          setCategories(res.data.data.data);
          setLinkCategories(res.data.data.links);
          setTotalCategories(res.data.data.total);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
        });
    }
  };

  const handleAddrTypeChange = (e) => {
    setLoading(true);
    let new_limit = addrtypeLimit[e.target.value];
    setLimiCategories(new_limit);
    getCategories(currentPage, new_limit)
      .then((res) => {
        setCategories(res.data.data.data);
        setLinkCategories(res.data.data.links);
        setTotalCategories(res.data.data.total);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <div className="block overflow-x-auto mt-5">
      <div className="w-full flex justify-between my-3">
        <div className="w-1/3 flex items-center">
          <h1 className="mr-2">Show</h1>
          <select
            onChange={(e) => handleAddrTypeChange(e)}
            className="h-full rounded-sm border block appearance-none w-1/2 bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          >
            {Add.map((item, key) => (
              <option key={key} value={key}>
                {item}
              </option>
            ))}
          </select>
        </div>
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
              className="appearance-none rounded-sm sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
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
            categories.map((item, index) => {
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
          <h5 className="flex items-center">
            Total Row :
            {loading ? (
              <FaIcons.FaSpinner className=" ml-2 animate-spin" />
            ) : (
              <span className=" ml-2">{totalCategories}</span>
            )}
          </h5>
        </div>
        <div className="flex items-center">
          <Pagination
            currentPage_data={currentPage}
            pages={linkCategories.length}
            paginate={paginate}
          />
        </div>
      </div>
    </div>
  );
};

export default TableCategory;
