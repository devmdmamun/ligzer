import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, seterror] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("Server Error");
        }
        return res.json();
      })
      .then((data) => {
        const dataList = [];
        for (const key in data) {
          const mydata = {
            id: key,
            ...data[key],
          };
          dataList.push(mydata);
        }
        setData(dataList);
        setLoading(false);
        seterror(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Fetch Aborted");
        } else {
          setLoading(false);
          seterror(err.message);
        }
      });
    return () => abortCont.abort();
  }, [url]);
  return { data, isLoading, error };
};

export default useFetch;
