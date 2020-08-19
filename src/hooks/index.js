import { useState, useEffect } from "react";
import axios from "axios";
import { GIT_URL } from "./../utilities/constants";

export const useFetch = (url, params, conditions) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    axios
      .get(GIT_URL + url, {
        params: {
          ...params,
        },
      })
      .then(({ data }) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, conditions);

  return [data, error, isLoading];
};
