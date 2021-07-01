import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";

const Pagination = ({ currentPage_data, pages, paginate }) => {
  const [currentPage, setCurrentPage] = useState(currentPage_data);
  let maxPages = pages - 2;
  let items = [];
  let leftSide = currentPage - 2;
  if (leftSide <= 0) leftSide = 1;
  let rightSide = currentPage + 2;
  if (rightSide > maxPages) rightSide = maxPages;
  for (let number = leftSide; number <= rightSide; number++) {
    items.push(
      <div
        key={number}
        className={`rounded-full h-7 w-7 flex items-center justify-center mx-2 cursor-pointer ${
          number === currentPage_data ? "bg-gray-800 text-gray-300" : ""
        }`}
        onClick={() => {
          setCurrentPage(number);
          paginate(number);
        }}
      >
        <span>{number}</span>
      </div>
    );
  }
  const nextPage = () => {
    if (currentPage < maxPages) {
      setCurrentPage(currentPage + 1);
      paginate(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      paginate(currentPage - 1);
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center">
        <div
          className="rounded-full h-7 w-7 flex items-center justify-center mx-2 cursor-pointer"
          onClick={prevPage}
        >
          <FaIcons.FaArrowLeft />
        </div>
        {items}
        <div
          className="rounded-full h-7 w-7 flex items-center justify-center mx-2 cursor-pointer"
          onClick={nextPage}
        >
          <FaIcons.FaArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
