import React, { useState } from "react";

const CounterApp = () => {
  const [state, setState] = useState({
    counter1: 10,
    counter2: 20,
  });
  //para mostrar una prop de un objeto, se puede hacer una destruct
  const { counter1, counter2 } = state;
  return (
    <div className="p-5">
      <h1>Counter1: {counter1}</h1>
      <h1>Counter2: {counter2}</h1>
      <button className="btn btn-primary" 
      //se peude setear una copia del estado que es un obj y actualizar una prop
           onClick={() => setState({ ...state, counter1: counter1 + 1 })}>
        Aumentar
      </button>
    </div>
  );
};

export default CounterApp;
