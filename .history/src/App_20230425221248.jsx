import {  useEffect } from "react";
import { fetchDataFromApi } from './apis/api.js';
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration, getGenres } from "./store.js/homeSlice.js";

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  console.log(url);

  useEffect(() => {
   fetchApiConfig();
   genresCall());
    // apiTest()
    fetchDataFromApi()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const apiTest = async () => {
  //   try {
  //     const response = await fetchDataFromApi('/movie/popular');
  //     console.log(response);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  const fetchApiConfig = async () => {
    try {
      const res = await fetchDataFromApi("/configuration");
      console.log(res);
  
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };
  
      dispatch(getApiConfiguration(url));
    } catch (error) {
      console.log(error);
    }
  };
  
  const genresCall = async () => {
    try {
      const endPoints = ["tv", "movie"];
      const allGenres = {};
  
      const promises = endPoints.map((url) => fetchDataFromApi(`/genre/${url}/list`));
  
      const response= await Promise.all(promises);
      console.log(response);
    response.forEach(({ genres }) => {
        genres.forEach((item) => (allGenres[item.id] = item));
      });
  
      dispatch(getGenres(allGenres));
    } catch (error) {
      console.log(error);
    }
  };

  return (
 
      <div className="App">
        <h1>APP</h1>
  </div>
  )
}

export default App;
