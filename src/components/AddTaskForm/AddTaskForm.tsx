import React, { FormEvent, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { add } from '../../actions/tasks';

import styles from './AddTaskForm.module.scss'

interface Props {}

const AddTaskForm = (props: Props) => {
    const inputRef = useRef<HTMLInputElement | any>();

    const dispatch = useDispatch();

    const handleSubmit = (event: FormEvent) => {
        const inputString = inputRef.current.value;

        if (inputString.trim() === '') {
            alert('Type something');
        } else {
            dispatch(add(inputRef.current.value));
            inputRef.current.value = '';
        }

        event.preventDefault();
    };

    return (
        <>
            <form onSubmit={handleSubmit} className={styles.root}>
                <input ref={inputRef} type="text" placeholder='Enter a task...' />
                <button type="submit">Add</button>
            </form>
        </>
    );
};

export default AddTaskForm;
