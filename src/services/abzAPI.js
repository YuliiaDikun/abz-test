import axios from "axios";
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
    console.log(error.message);
  }
};

const getUsers = async (page = 1) => {
  try {
    const res = await axios.get(`/users?page=${page}&count=6`);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};

const registerUser = async (userData) => {
  try {
    await getToken();
    const res = await axios.post(`/users`, userData);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};

const getUserById = async (id) => {
  try {
    const res = await axios.get(`/users/${id}`);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};

const getPositions = async () => {
  try {
    const res = await axios.get(`/positions`);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};

export { getUsers, registerUser, getUserById, getPositions };
