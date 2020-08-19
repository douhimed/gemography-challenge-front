import { useState, useEffect } from "react";
import axios from "axios";
import { GIT_URL } from "./../utilities/constants";

export const useFetch = (url, params, conditions) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(GIT_URL + url, {
        params: {
          ...params,
        },
      })
      .then(({ data }) => {
        setData(data);
        setError(null);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(true);
      });
  }, conditions);

  return [data, error, isLoading];
};
