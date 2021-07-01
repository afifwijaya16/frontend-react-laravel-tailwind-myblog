import axios from "axios";

export const getCategories = async (page, limit) =>
  await axios.get(`http://localhost/react-laravel-myblog/api/category`, {
    params: { page: page, limit: limit },
  });

export const getCategorySearch = async (page, search, limit) =>
  await axios.get(`http://localhost/react-laravel-myblog/api/category`, {
    params: { page: page, search: search, limit: limit },
  });

export const getCategory = async (id) =>
  await axios.get(`http://localhost/react-laravel-myblog/api/category/${id}`);

export const createCategory = async (category) =>
  await axios.post(
    `http://localhost/react-laravel-myblog/api/category`,
    category
  );

export const removeCategory = async (id) =>
  await axios.delete(
    `http://localhost/react-laravel-myblog/api/category/${id}`
  );

export const categoryUpdate = async (id, category) =>
  await axios.put(
    `http://localhost/react-laravel-myblog/api/category/${id}`,
    category
  );
