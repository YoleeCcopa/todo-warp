import { useState } from "react";
import styles from "./BasicInput.module.css";

interface Props {
    id: string;
    label: string;
    isRequired?: boolean;
}

const BasicInput = ({ id, label, isRequired }: Props) => {
    const [text, setText] = useState("");

    return (
        <div className={styles.inputTxt}>
            <input type="text"
                name={id}
                id={id}
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
                autoComplete="off"/>
            <label htmlFor={id}>{label}</label>
        </div>
    )
}

export default BasicInput
