import TaskItem from './TaskItem'
import styles from "./TaskList.module.css";

import { type Task } from './../../assets/Interfaces'

interface Props {
    tasks: Task[];
    category?: string; 
    onDelete: (id: string) => void;
    onEdit: (id: string) => void;
    onRestore: (id: string) => void;
    onToggle: (id: string) => void;
}

const TaskList = ({ tasks, category, onDelete, onEdit, onRestore, onToggle }: Props) => {
    return (
        <ul className={styles.list}>
            <h2>List of {category} Tasks</h2>
            {tasks.length === 0 ? (
                <div className={styles.alert}>
                    <p>There are no pending tasks!</p>
                </div>
            ) : (
            tasks.map(todo => (
                <TaskItem
                key={todo.id}
                task={todo}
                onDelete={onDelete}
                onEdit={onEdit}
                onRestore={onRestore}
                onToggle={onToggle}
                />
            )))}
        </ul>
    )
}

export default TaskList

