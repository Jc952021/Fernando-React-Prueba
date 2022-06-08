import React, { useEffect, useReducer } from "react";
import useForm from "../../hooks/useForm";
import TodoAdd from "./components/TodoAdd";
import TodoList from "./components/TodoList";
import todoReducer from "./todoReducer";

const init = ()=>{
  //parseo del local, si no hay nada entonces saldra un null, si sale esto entonces
  //retornara el []
  return JSON.parse(localStorage.getItem("todo")) || []
}


const TodoApp = () => {
  const [state, dispatch] = useReducer(todoReducer, [],init);

const handleAdd=(newNote)=>{
dispatch(newNote)
}

  const handleDelete=(id)=>{
    dispatch({
      type:"delete",
      payload:id
    })
  }

const handleToggle=(id)=>{
dispatch({
  type:"toggle",
  payload:id
})
}

useEffect(() => {
  localStorage.setItem("todo",JSON.stringify(state))  
}, [state])

  return (
    <div className="p-5">
      <h1>TodoApp {state.length}</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList state={state} handleDelete={handleDelete} handleToggle={handleToggle}/>
        </div>
        <div className="col-5">
         <TodoAdd handleAdd={handleAdd}/>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
