import React from "react";

const TodoListItem = ({handleDelete,handleToggle,doc,i}) => {
  return (
    <li  className="list-group-item">
      <p
        onClick={() => handleToggle(doc.id)}
        className={`${doc.done && "complete"}`}
      >
        {i + 1}. {doc.desc}
      </p>
      <button className="btn btn-danger" onClick={() => handleDelete(doc.id)}>
        Borrar
      </button>
    </li>
  );
};

export default TodoListItem;
