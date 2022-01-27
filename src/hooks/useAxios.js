import { useState, useEffect } from "react";
import axiosClient from "api/axios";

/**
 * Hook that performs an HTTP request using Axios.
 *
 * @param {Object} params Request config for Axios. See https://github.com/axios/axios#request-config
 *
 * @returns An object containing the response data, error state, and loading state.
 */
const useAxios = (params) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axiosClient.request(params);
      setResponse(res.data);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { response, error, loading };
};

export default useAxios;
