import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../apis/api";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setData(null);
        setError(null);

        const res = await fetchDataFromApi(url);
        setLoading(false);
        setData(res);
      } catch (err) {
        setLoading(false);
        setError("Something went wrong!");
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;