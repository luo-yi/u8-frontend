import { useState } from 'react';
import axios from 'axios';

function useGet() {
  const [response, setResponse] = useState({
    response: undefined,
    error: undefined,
    isLoading: false,
  });

  const get = (url: string) => {
    setResponse((res) => ({ ...res, isLoading: true }));

    axios.get(url).then((res) => {
      setResponse({
        response: res.data,
        error: undefined,
        isLoading: false,
      });
    }).catch((err) => {
      setResponse({
        response: undefined,
        error: err,
        isLoading: false,
      });
    });
  };

  return { ...response, get };
}

export default useGet;
