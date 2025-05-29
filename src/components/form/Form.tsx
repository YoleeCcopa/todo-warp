import { useState, type FormEvent } from "react";
import Dropdown from "../dropdown/Dropdown"

interface Props {
    onSubmit: (text: string) => void;
}

const Form = ({ onSubmit }: Props) => {
    const categories = ["cleaning", "work", "errants", "learning", "health"];

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
            <input type="text" name="newTaskName" id="newTaskName" value={text} onChange={(e) => setText(e.target.value)}/>
            <label htmlFor="newTaskName">Name</label>
            <Dropdown id="newTaskCategroy" header="Category" values={categories} setValue={setCategory}></Dropdown>
            <button onClick={() => console.log(category)}>ADD</button>
        </form>
    )
}

export default Form
