import React from "react";

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(null);
  const [error, setError] = React.useState(null);

  const request = React.useCallback(async (url = "", options = {}) => {
    let response, json;
    try {
      setError(null);
      setIsLoading(true);
      response = await fetch(url, options);
      json = await response.json();
      if (!response.ok) throw new Error(json.message);
    } catch (err) {
      setError(err);
    } finally {
      setData(json);
      setIsLoading(false);
      return { response, json };
    }
  }, []);

  return { data, isLoading, error, request };
};

export default useFetch;
