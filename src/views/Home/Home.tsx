import { useSelector } from 'react-redux';

import AddTaskForm from '../../components/AddTaskForm/AddTaskForm';
import Container from '../../components/Container';
import Tasks from '../../components/Tasks';

import styles from './Home.module.scss';

const Home = () => {
    const tasks = useSelector((state: any) => state);

    return (
        <Container>
            <h1>TODO LIST</h1>

            <AddTaskForm />
            {tasks.length ? <Tasks tasks={tasks} /> : <div className={styles.blank}>No tasks to do...</div>}
        </Container>
    );
};

export default Home;
