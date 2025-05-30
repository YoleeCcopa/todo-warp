import { useState } from "react";
import styles from "./TaskItem.module.css";
import IconButton from "../buttons/IconButton";

import { type Task } from './../../assets/Interfaces'

interface Props {
    task: Task;
    onDelete: (id: string) => void;
    onEdit: (id: string) => void;
    onRestore: (id: string) => void;
}

const TaskItem = ({ task, onDelete, onEdit, onRestore }: Props) => {
    const [checked, setChecked] = useState(false);

    return (
        <li className={`${styles.wrapper} ${task.isDeleted ? styles.todoDeleted : ''}`}>
            <div className={checked ? styles.check : styles.active}>
                <input type="checkbox" 
                    name={task.id}
                    id={task.id} 
                    onChange={(e) => setChecked(e.target.checked)} 
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

