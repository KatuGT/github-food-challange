import axios from 'axios';
import { useEffect, useState } from 'react';

const useFech = (url, config) => {
  const [dataFetch, setDataFetch] = useState({
    loading: true,
    error: null,
    data: null,
  });

  const getData = async () => {
    const res = await axios(url, config);
    setDataFetch({
      loading: false,
      error: null,
      data: res,
    });
  };
  useEffect(() => {
    getData();
  }, [url]);

  return dataFetch;
};

export default useFech;
