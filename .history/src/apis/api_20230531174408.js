import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
  Authorization: `bearer ${TMDB_TOKEN}`,
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "text/plain",
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const response = await axios.get(`${BASE_URL}${url}`, {
      headers,
      params,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
