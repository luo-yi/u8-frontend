import { useState } from 'react';
import axios from 'axios';

function useDelete() {
  const [response, setResponse] = useState({
    response: undefined,
    error: undefined,
    isLoading: false,
  });

  const del = (url: string) => {
    setResponse((res) => ({ ...res, isLoading: true }));

    axios.delete(url).then((res) => {
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

  return { ...response, delete: del };
}

export default useDelete;
