import { useState } from 'react';
import axios from 'axios';

function usePut() {
  const [response, setResponse] = useState({
    response: undefined,
    error: undefined,
    isLoading: false,
  });

  const put = (url: string, body: any) => {
    setResponse((res) => ({ ...res, isLoading: true }));

    axios.put(url, body).then((res) => {
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

  return { ...response, put };
}

export default usePut;
