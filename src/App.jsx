import React from 'react';
import './App.css';
import { TodoList } from './Components/TodoList.jsx';
import { TodoAdd } from './Components/TodoAdd.jsx';
import { useTodo } from './hooks/UseTodo.js'; 

function App() {
    const {
        todos,
        todosCount,
        handleNewTodo,
        handleDeleteTodo,
        handleCompleteTodo,
        handleUpdateTodo,
    } = useTodo();

    const pendingTodosCount = todos.filter(todo => !todo.completed).length;

    return (
        <div className='card-to-do'>
            <h1>Lista de tareas</h1>
            <div className='counter-todos'>
                <h3>
                    N° Tareas: <span>{todosCount}</span>
                </h3>
                <h3>
                    Pendientes: <span>{pendingTodosCount}</span>
                </h3>
            </div>

            <div className='add-todo'>
                <h3>Agregar Tarea</h3>
                <TodoAdd handleNewTodo={handleNewTodo} />
            </div>

            <TodoList
                todos={todos}
                handleUpdateTodo={handleUpdateTodo}
                handleDeleteTodo={handleDeleteTodo}
                handleCompleteTodo={handleCompleteTodo}
				
            />
        </div>
    );
}

        document.getElementById('todo-form').addEventListener('submit', function(event) {
            event.preventDefault();
            const input = document.getElementById('todo-input');
            const taskText = input.value.trim();
            if (taskText !== '') {
                const li = document.createElement('li');
                li.className = 'flex items-center justify-between p-2 border-b border-gray-200';
                li.innerHTML = `
                    <span>${taskText}</span>
                    <button class="text-red-500 hover:text-red-700 focus:outline-none">
                        <i class="fas fa-trash"></i>
                    </button>
                `;
                document.getElementById('todo-list').appendChild(li);
                input.value = '';
            }
        });

        document.getElementById('todo-list').addEventListener('click', function(event) {
            if (event.target.closest('button')) {
                event.target.closest('li').remove();
            }
        });




        export default App;


