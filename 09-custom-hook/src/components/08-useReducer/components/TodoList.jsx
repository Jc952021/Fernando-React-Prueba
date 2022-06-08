import React from 'react'
import TodoListItem from './TodoListItem'

const TodoList = ({handleDelete,handleToggle,state}) => {
  return (
  <ul className="list-group list-group-flush">
          {state.map((doc, i) => (
            <TodoListItem key={doc.id} handleDelete={handleDelete} handleToggle={handleToggle} doc={doc} i={i}/>
      ))}
  </ul>
  )
}

export default TodoList