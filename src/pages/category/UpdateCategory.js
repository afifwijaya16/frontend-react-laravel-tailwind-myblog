import React, { useState, useEffect } from "react";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import { useParams } from "react-router";
import * as FaIcons from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";
import { getCategory, categoryUpdate } from "../../function/category";
import Swal from "sweetalert2";
const UpdateCategory = () => {
  const { id } = useParams();
  let history = useHistory();
  const [category, setCategory] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadCategory = () => {
      getCategory(id)
        .then((res) => {
          setCategory(res.data.data.category);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    loadCategory();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const postBody = {
      category: category,
    };
    const response = await categoryUpdate(id, postBody);
    if (response.data.success) {
      setCategory("");
      Swal.fire({
        title: `${response.data.data.category} is updated`,
        icon: "success",
      });
      setLoading(false);
      history.push("/category");
    } else {
      setLoading(false);
      setErrors(response.data.errors);
    }
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
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                    placeholder="Enter your input here"
                    className="w-full mt-2 mb-3 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-900"
                  />
                  {errors && errors.category && (
                    <p className="text-red-700 mb-2">{errors.category[0]}</p>
                  )}
                  {loading ? (
                    <button
                      className="bg-green-400 text-gray-200 rounded hover:bg-green-500 px-4 py-1 focus:outline-none
                    flex items-center"
                      disabled
                    >
                      <FaIcons.FaSpinner className="animate-spin mr-2" />
                      Processing
                    </button>
                  ) : (
                    <button
                      className="bg-green-600 text-gray-200 rounded hover:bg-green-500 px-4 py-1 focus:outline-none
                  flex items-center"
                    >
                      <FaIcons.FaSave className="mr-2" /> Update
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateCategory;
