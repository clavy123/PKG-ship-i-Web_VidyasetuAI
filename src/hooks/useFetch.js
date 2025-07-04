import { useState, useEffect } from "react";
import { axiosInstance } from "../api";

export function useFetch(url, config = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;
    let isMounted = true;
    setLoading(true);
    setError(null);
    setData(null);
    axiosInstance(url, config)
      .then((response) => {
        if (isMounted) setData(response.data);
      })
      .catch((err) => {
        if (isMounted) setError(err);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });
    return () => {
      isMounted = false;
    };
  }, [config, url]);

  return { data, loading, error };
}
