import React from 'react';
import { useDispatch } from 'react-redux';
import { MdDelete, MdDone } from 'react-icons/md';

import { isDone, remove } from '../../actions/tasks';

import styles from './Tasks.module.scss';

interface Props {
    tasks: Array<any>;
}

const Tasks = ({ tasks }: Props) => {
    const dispatch = useDispatch();

    return (
        <ul className={styles.root}>
            {tasks &&
                tasks.map((task: any, index: number) => (
                    <li key={task.id} className={`${task.done ? styles.done : null}`}>
                        <div className={styles.mark}>
                            <button onClick={() => dispatch(isDone(index))}>{task.done && <MdDone color="#33FF99" />}</button>
                        </div>
                        <div className={`${styles.title} ${task.done ? styles.done : null}`}>{task.title}</div>
                        <div className={styles.remove}>
                            <button onClick={() => dispatch(remove(index))}>
                                <MdDelete />
                            </button>
                        </div>
                    </li>
                ))}
        </ul>
    );
};

export default Tasks;
