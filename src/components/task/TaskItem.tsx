import styles from "./TaskItem.module.css";
import IconButton from "./../buttons/iconButton/IconButton";

import { type Task } from './../../assets/Interfaces'

interface Props {
    task: Task;
    onDelete: (id: string) => void;
    onEdit: (id: string) => void;
    onRestore: (id: string) => void;
    onToggle: (id: string) => void;
}

const TaskItem = ({ task, onDelete, onEdit, onRestore, onToggle }: Props) => {
    return (
        <li className={`${styles.wrapper} ${task.isDeleted ? styles.todoDeleted : ''}`}>
            <div className={styles.check}>
                <input type="checkbox" 
                    name={task.id}
                    id={task.id} 
                    checked={task.isCompleted} 
                    onChange={() => onToggle(task.id)}
                    disabled={task.isDeleted}
                />
                <i className={styles.mdiCheckDecagram}></i>
            </div>
            <label htmlFor={task.id}>{task.content}</label>
            <div className={styles.checkbox_btns}>
                <IconButton type="edit" icon="mdiEdit" onClick={() => onEdit(task.id)} disabled={task.isDeleted}/>
                {!task.isDeleted ? (
                    <IconButton type="delete" icon="mdiDelete" onClick={() => onDelete(task.id)}/>
                    ) : (
                    <IconButton type="restore" icon="mdiDeleteEmpty" onClick={() => onRestore(task.id)} />
                )}
            </div>
        </li>
    )
}

export default TaskItem

