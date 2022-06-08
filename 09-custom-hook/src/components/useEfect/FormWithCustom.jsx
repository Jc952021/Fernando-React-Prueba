import React from "react";
import useForm from "../../hooks/useForm";

const FormWithCustom = () => {
  const [formValues, handleInput] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const {name,email,password} = formValues
  const submit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <form onSubmit={submit}>
      <input type="text" name="name" value={name} onChange={handleInput} />
      <input type="text" name="email" value={email} onChange={handleInput} />
      <input
        type="text"
        name="password"
        value={password}
        onChange={handleInput}
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormWithCustom;
