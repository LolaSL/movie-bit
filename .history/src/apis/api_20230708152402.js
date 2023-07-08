import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;
console.log(TMDB_TOKEN)
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
import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const headers = {
  // Remove the Authorization header since the token will be passed as a parameter
};

export const fetchDataFromApi = async (url, params, token) => {
  try {
    const data = await axios.get(`${BASE_URL}${url}`, {
      headers: {
        ...headers,
        Authorization: `bearer ${token}`,
      },
      params,
    });
    return data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
const TMDB_TOKEN = "YOUR_TOKEN_HERE";

// Call the fetchDataFromApi function with the token
const data = fetchDataFromApi("/endpoint", { param: "value" }, TMDB_TOKEN);


