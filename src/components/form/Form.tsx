import { useState, type FormEvent } from "react"; 
import type { Categories } from "../../assets/Interfaces";
import styles from "./Form.module.css";

import CategoryData from './../../assets/categories.json';

import Dropdown from "../dropdown/Dropdown"

interface Props {
    onSubmit: (text: string) => void;
}

const Form = ({ onSubmit }: Props) => {
    const categories: Categories[] = CategoryData.map(item => ({
        id: item.id,
        name: item.name,
        icon: item.icon
    }));

    const [category, setCategory] = useState(String)

    const [text, setText] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!text.trim()) return;
        onSubmit(text);
        setText("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>New To-Do</h2>
            <div className={styles.container}>
                <div className={styles.inputTxt}>
                    <input type="text" name="newTaskName" id="newTaskName" value={text} onChange={(e) => setText(e.target.value)} required autoComplete="off"/>
                    <label htmlFor="newTaskName">Name</label>
                </div>
                <Dropdown id="newTaskCategroy" header="Category" values={categories} setValue={setCategory}></Dropdown>
                <button onClick={() => console.log(category)}>add</button>
            </div>
        </form>
    )
}

export default Form
