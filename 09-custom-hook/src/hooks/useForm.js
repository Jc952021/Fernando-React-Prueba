import { useState } from "react";

//por defecto un obj para que no salga error
const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const reset = () => {
    setValues(initialState);
  };

  const handleChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };
  //retornamos un array y al momento de destructuralo donde lo ejecutemos
  //podemos renombrar los valores del array pero respetando el orden
  return [values, handleChange, reset];
};

export default useForm;
