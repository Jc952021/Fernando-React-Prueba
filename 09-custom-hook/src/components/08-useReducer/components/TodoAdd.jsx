import React from "react";
import useForm from "../../../hooks/useForm";

const TodoAdd = ({ handleAdd }) => {
  const [{ description }, handleChange, reset] = useForm({
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim().length <= 1) return;
    handleAdd({
      type: "add",
      payload: {
        id: new Date().getTime(),
        desc: description,
        done: false,
      },
    });
    reset()
  };

  return (
    <>
      <h4>Agregar Todo</h4>
      <hr />
      <form id="form" onSubmit={handleSubmit}>
        <label htmlFor="descriptionname">Nombre</label>
        <input
          type="text"
          className="form-control"
          name="description"
          onChange={handleChange}
          value={description}
          id="descriptionname"
        />
        <button type="submit" className="btn btn-outline-primary mt-2 w-100">
          Agregar
        </button>
      </form>
    </>
  );
};

export default TodoAdd;
