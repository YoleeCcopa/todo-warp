import TaskItem from './TaskItem'
import styles from "./TaskList.module.css";

import { type Task } from './../../assets/Interfaces'

interface Props {
    tasks: Task[];
    onDelete: (id: string) => void;
    onEdit: (id: string) => void;
    onRestore: (id: string) => void;
}

const TaskList = ({ tasks, onDelete, onEdit, onRestore }: Props) => {
    return (
        <ul className={styles.list}>
            <h2>List of Cleaning Tasks</h2>

            {tasks.map(todo => (
                <TaskItem task={todo} onDelete={onDelete} onEdit={onEdit} onRestore={onRestore}></TaskItem>
            ))}
        </ul>
    )
}

export default TaskList

