
import { useEffect, useReducer } from 'react';

// Estado inicial para el reducer
const initialState = {
    todos: [],
};

// Reducer para manejar las acciones de las tareas
const todoReducer = (state, action) => {
    switch (action.type) {
        case 'Add Todo':
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };
        case 'Delete Todo':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload),
            };
        case 'Complete Todo':
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
                ),
            };
        case 'Update Todo':
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload.id ? { ...todo, description: action.payload.description } : todo
                ),
            };
        default:
            return state;
    }
};

export const useTodo = () => {
    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || { todos: [] };
    };

    const [state, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(state));
    }, [state]);

    const handleNewTodo = (description) => {
        const newTodo = {
            id: Date.now(), // Genera un ID único
            description,
            completed: false, // Puedes agregar un estado de completado si lo deseas
        };
        dispatch({ type: 'Add Todo', payload: newTodo });
    };

    const handleDeleteTodo = (id) => {
        dispatch({ type: 'Delete Todo', payload: id });
    };

    const handleCompleteTodo = (id) => {
        dispatch({ type: 'Complete Todo', payload: id });
    };

    const handleUpdateTodo = (id, description) => {
        dispatch({
            type: 'Update Todo',
            payload: {
                id,
                description,
            },
        });
    };

    const todosCount = state.todos.length;

    return {
        todos: state.todos,
        todosCount,
        handleCompleteTodo,
        handleNewTodo,
        handleDeleteTodo,
        handleUpdateTodo,
    };
};

