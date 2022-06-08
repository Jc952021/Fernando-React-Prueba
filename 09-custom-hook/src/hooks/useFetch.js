import { useEffect, useRef, useState } from "react";

const useFetch = (url) => {
  const [state, setState] = useState({
    loading: true,
    data: null,
    error: null,
  });


  useEffect(() => {
  //se pone esto para que nos salga el loading antes de que haga su fetch
    setState({
      loading: true,
      data: null,
      error: null,
    });

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setState({
          loading: false,
          data,
          error: null,
        });
      }).catch({
        loading:false,
        data:null,
        error:"error xd"
      })
  }, [url]);

  return state;
};

export default useFetch;
