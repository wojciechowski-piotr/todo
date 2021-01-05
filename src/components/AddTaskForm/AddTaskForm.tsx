import { FormEvent, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { add } from '../../actions/tasks';

import styles from './AddTaskForm.module.scss';

const AddTaskForm = () => {
    const tasks = useSelector((state: any) => state);

    const buttonRef = useRef<HTMLButtonElement | any>();

    const [taskInput, setTaskInput] = useState('');
    const [isValid, setIsValid] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        const validate = () => {
            if (taskInput.trim() !== '') {
                setIsValid(true);
                buttonRef.current.disabled = false;

                return;
            }

            setIsValid(false);
            buttonRef.current.disabled = true;
        };
        validate();
    }, [taskInput]);

    const handleChange = (event: any) => {
        setTaskInput(event.target.value);
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        if (isValid === true) {
            dispatch(add(taskInput));
            setTaskInput('');
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className={styles.root} style={isValid ? { marginBottom: '2rem' } : { marginBottom: '0.5rem' }}>
                <input value={taskInput} onChange={handleChange} type="text" placeholder="Enter the task name..." />
                <button ref={buttonRef} type="submit">
                    Add
                </button>
            </form>
            {isValid === false && tasks.length !== 0 && <div className={styles.warn}>You have to enter something to add a task</div>}
        </>
    );
};

export default AddTaskForm;
