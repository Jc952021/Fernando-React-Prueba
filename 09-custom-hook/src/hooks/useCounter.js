import React, { useState } from "react";

const useCounter = (initialState = 10) => {
  const [counter, setCounter] = useState(initialState);

  const incrementar = () => {
    setCounter(counter + 1);
  };
  const decrementar = () => {
    setCounter(counter - 1);
  };
  const reset = () => {
    setCounter(initialState);
  };
  return {
    counter,
    incrementar,
    decrementar,
    reset,
  };
};

export default useCounter;
