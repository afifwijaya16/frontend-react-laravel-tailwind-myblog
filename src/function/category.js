import axios from "axios";

export const getCategories = async () =>
  await axios.get(`http://localhost/laravel-react-myblog/api/category`);
