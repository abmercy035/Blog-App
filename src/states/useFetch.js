/** @format */

import { useEffect, useState } from "react";

 function useFetch(url) {
  const [data, setData] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, {signal : abortCont.signal})
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsFetching(false);
          setError(null);
        })
        .catch((err) => {
          if(err.name === 'AbortError'){
            console.log('aborted')
          }
      else{
  setError(err.message);
          setIsFetching(false);}
        });
    }, 1000);

    return()=> abortCont.abort()

  }, [url]);

  return {
   data, error, isFetching
  }
}

export default useFetch;