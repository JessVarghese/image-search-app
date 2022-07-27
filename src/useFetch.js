import { useState } from "react";


const useFetch = (url) => {
  const [res, setRes] = useState([]);

  const fetchRequest = async () => {
    const data = await fetch(url);
    const dataJ = await data.json();
    const result = dataJ.results;
    setRes(result);
  };
  return [{ res }, fetchRequest];
};

export default useFetch;