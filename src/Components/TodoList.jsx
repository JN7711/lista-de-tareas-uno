import React from "react";
import { Todoitem } from './Todoitem';

export const TodoList = ({ todos, handleUpdateTodo, handleDeleteTodo, handleCompleteTodo }) => {
    return (
        <ul>
            {todos.map(todo => (
                <Todoitem
                    key={todo.id}
                    todo={todo} 
                    handleUpdateTodo={handleUpdateTodo}
                    handleDeleteTodo={handleDeleteTodo}
                    handleCompleteTodo={handleCompleteTodo}
                />
            ))}
        </ul>
    );
};



