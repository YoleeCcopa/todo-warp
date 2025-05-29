import TaskItem from './TaskItem'
import styles from "./TaskList.module.css";

import { type Task } from './../../assets/Interfaces'

interface Props {
    tasks: Task[];
    onDelete: (id: string) => void;
    onEdit: (id: string) => void;
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

