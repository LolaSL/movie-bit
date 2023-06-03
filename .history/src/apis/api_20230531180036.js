import axios from "axios";
import { process} from 'dotenv';

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = process.env.VITE_APP_TMDB_TOKEN;

const headers = {
  Authorization: `bearer ${TMDB_TOKEN}`,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const data = await axios.get(`${BASE_URL}${url}`, {
      headers,
      params,
    });
    return data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
