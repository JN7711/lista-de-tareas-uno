import React from "react";
import { TodoUpdate } from './TodoUpdate';

export const Todoitem = ({ 
  todo,
  handleUpdateTodo,
  handleDeleteTodo,
  handleCompleteTodo,
}) => {
  return (
    <li>
      <span onClick={() => handleCompleteTodo(todo.id)}>
        <label htmlFor="" className='container-done'>
          {todo.done ? '✔️' : '❌'} {/* Muestra un ícono de completado */}
        </label>
        {todo.description} {/* Muestra la descripción de la tarea */}
      </span>
      <TodoUpdate todo={todo} handleUpdateTodo={handleUpdateTodo} />
      <button className="btn-delete" onClick={() => handleDeleteTodo(todo.id)}>
        BORRAR
      </button>
    </li>
  );
};





