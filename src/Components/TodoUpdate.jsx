import {edit} from 'react';
import { useRef, useState } from 'react';
import { useForm } from '../hooks/useForm';

export const TodoUpdate = ({ todo, handleUpdateTodo }) => {
    const { updateDescription, onInputChange } = useForm({
        updateDescription: todo.description,
    });

    const [disabled, setDisabled] = useState(true);
    const focusInputRef = useRef();

    const onSubmitUpdate = (e) => {
        e.preventDefault();

        const id = todo.id;
        const description = updateDescription;

        if (description.length <= 1) return;

        handleUpdateTodo(id, description);

        setDisabled(true); 
        focusInputRef.current.focus(); 
    };

    return (
        <form onSubmit={onSubmitUpdate}>
            <input
                type='text'
                className='input-update'
                name='updateDescription'
                value={updateDescription}
                onChange={onInputChange}
                placeholder='¿Qué hay que hacer?'
                readOnly={disabled}
                ref={focusInputRef}
            />

            <button className='btn-edit' type='submit'>
                EDITAR
            </button>
        </form>
    );
};


