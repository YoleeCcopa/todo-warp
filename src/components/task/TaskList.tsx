import TaskItem from './TaskItem'
import styles from "./TaskList.module.css";

interface Todo {
    id: number;
    text: string;
}

interface Props {
    tasks: Todo[];
    onDelete: (id: number) => void;
    onEdit: (id: number) => void;
}

const TaskList = ({ tasks, onDelete, onEdit }: Props) => {
    return (
        <ul className={styles.list}>
            <h2>List of Cleaning Tasks</h2>

            {tasks.map(todo => (
                <TaskItem key={todo.id} id={todo.id} name='task' onDelete={onDelete} onEdit={onEdit}>
                    <>{todo.text}</>
                </TaskItem>
            ))}
        </ul>
    )
}

export default TaskList

