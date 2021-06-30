import React, { useState, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import Swal from "sweetalert2";
import { getCategories, removeCategory } from "../../function/category";
import { Link } from "react-router-dom";
const TableCategory = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadCategories = () => {
    setLoading(true);
    getCategories()
      .then((dataCategories) => {
        setCategories(dataCategories.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

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

  return (
    <div className="block overflow-x-auto mt-5">
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
    </div>
  );
};

export default TableCategory;
