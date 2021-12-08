import { useState, useEffect } from 'react';

function usePagination(initialUrl: string) {
  const [response, setResponse] = useState({ 
    items: [],
    totalItems: undefined,
    next: undefined,
    previous: undefined
  });

  const next = () => ();
  const previous = () => ();

  return { response, next, previous, isLoading, error };
}

export default usePagination;
