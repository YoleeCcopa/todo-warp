import { useState, type FormEvent } from "react"; 
import type { Task, Category } from "../../assets/Interfaces";
import styles from "./Form.module.css";

import CategoryData from './../../assets/categories.json';

import Dropdown from "./dropdown/Dropdown"
import BasicInput from "./basicInput/BasicInput";

interface Props {
    onSubmit: (task: Task) => void;
}

const Form = ({ onSubmit }: Props) => {
    const categories: Category[] = CategoryData.map(item => ({
        id: item.id,
        name: item.name,
        icon: item.icon
    }));

    const [category, setCategory] = useState("");
    const [text, setText] = useState("");

    const generateId = () => Math.random().toString(36);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!text.trim() || !category) return;
        const newTodo: Task = {
            id: generateId(),
            content: text,
            category: category,
            isCompleted: false,
            isDeleted: false
        };
        
        onSubmit(newTodo);
        setText("");
        setCategory("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>New To-Do</h2>
            <div className={styles.container}>
                <BasicInput id="newTaskName"
                    label="Name"
                    value={text}
                    isRequired={true}
                    onChange={(e) => setText(e.target.value)}/>
                <Dropdown id="newTaskCategroy"
                    header="Category" 
                    items={categories}
                    value={category}
                    placeholder="Select a category"
                    setValue={setCategory}/>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default Form
