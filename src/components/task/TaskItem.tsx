import { useState, type ReactNode } from "react";
import styles from "./TaskItem.module.css";
import IconButton from "../buttons/IconButton";

interface Props {
    id: string;
    name: string;
    children: ReactNode;
    onDelete: (id: string) => void;
    onEdit: (id: string) => void;
}

const TaskItem = ({ id, name, children, onDelete, onEdit }: Props) => {
    const [checked, setChecked] = useState(false);

    return (
        <li className={styles.wrapper}>
            <div className={checked ? styles.check : styles.active}>
                <input type="checkbox" name={name} id={id.toString()} onChange={(e) => setChecked(e.target.checked)}/>
                <i className={styles.mdiCheckDecagram}></i>
            </div>
            <label htmlFor={id.toString()}>{children}</label>
            <div className={styles.checkbox_btns}>
                <IconButton type="edit" icon="mdiEdit" onClick={() => onEdit(id)}/>
                <IconButton type="delete" icon="mdiDelete" onClick={() => onDelete(id)}/>
            </div>
        </li>
    )
}

export default TaskItem

