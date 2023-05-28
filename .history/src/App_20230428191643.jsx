import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { fetchDataFromApi } from "./apis/api.js";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration, getGenres } from "./store/homeSlice.js";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Home from "./pages/home/Home.jsx";
import Details from "./pages/details/Details.jsx";
import SearchResult from "./pages/searchResult/SearchResult.jsx";
import Explore from "./pages/explore/Explore.jsx";
import NotFound from "./pages/notFound/NotFound.jsx";

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  console.log(url);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchApiConfig(dispatch);
        await genresCall(dispatch);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array for componentDidMount-like effect
  
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

      const promises = endPoints.map((url) =>
        fetchDataFromApi(`/genre/${url}/list`)
      );

      const response = await Promise.all(promises);
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
    <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:mediaType/:id" element={<Details />} />
                <Route path="/search/:query" element={<SearchResult />} />
                <Route path="/explore/:mediaType" element={<Explore />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
  );
}

export default App;
