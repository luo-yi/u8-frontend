import { useState } from 'react';
import axios from 'axios';

function usePost() {
  const [response, setResponse] = useState({
    response: undefined,
    error: undefined,
    isLoading: false,
  });

  const post = (url: string, body: any) => {
    setResponse((res) => ({ ...res, isLoading: true }));

    axios.post(url, body).then((res) => {
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

  return { ...response, post };
}

export default usePost;
