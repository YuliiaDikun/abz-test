import axios from "axios";
import { toast } from "react-toastify";
const BASE_URL = "https://frontend-test-assignment-api.abz.agency/api/v1";
axios.defaults.baseURL = `${BASE_URL}`;
const setToken = (token) => {
  axios.defaults.headers.Token = `${token}`;
};

const getToken = async () => {
  try {
    const res = await axios.get("/token");
    setToken(res.data.token);
  } catch (error) {
    toast.error(error.message);
  }
};

const getUsers = async (page = 1) => {
  try {
    const res = await axios.get(`/users?page=${page}&count=6`);
    return res.data;
  } catch (error) {
    const code = error.response.status;
    if (code === 404) toast.error("Page not found.");
    if (code === 422) toast.error("Validation failed.");
  }
};

const registerUser = async (userData) => {
  try {
    await getToken();
    const res = await axios.post(`/users`, userData);
    return res.data;
  } catch (error) {
    const code = error.response.status;
    if (code === 401) toast.error("The token expired.");
    if (code === 409)
      toast.error("User with this phone or email already exist.");
    if (code === 422) toast.error("Validation failed.");
  }
};

const getUserById = async (id) => {
  try {
    const res = await axios.get(`/users/${id}`);
    return res.data;
  } catch (error) {
    const code = error.response.status;
    if (code === 400) toast.error("Validation failed.");
    if (code === 404)
      toast.error("The user with the requested identifier does not exist.");
  }
};

const getPositions = async () => {
  try {
    const res = await axios.get(`/positions`);
    return res.data;
  } catch (error) {
    const code = error.response.status;
    if (code === 404) toast.error("Page not found.");
    if (code === 422) toast.error("Positions not found.");
  }
};

export { getUsers, registerUser, getUserById, getPositions };
