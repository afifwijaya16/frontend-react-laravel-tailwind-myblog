import React, { useState, useEffect } from "react";
import { getCategories } from "../../function/category";
const TableCategory = () => {
  const [categories, setCategories] = useState([]);

  const loadCategories = () =>
    getCategories().then((dataCategories) =>
      setCategories(dataCategories.data.data)
    );

  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <div className="block overflow-x-auto mt-5">
      <table className="w-full text-left rounded-lg">
        <thead>
          <tr className="bg-gray-700 text-gray-200 border border-b-0">
            <th className="px-4 py-3">No</th>
            <th className="px-4 py-3">Category</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((item, index) => {
            return (
              <tr
                key={index}
                className="w-full font-light text-gray-700 bg-gray-100 whitespace-no-wrap border border-b-0"
              >
                <td className="px-4 py-4">{index + 1}</td>
                <td className="px-4 py-4">{item.category}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableCategory;
