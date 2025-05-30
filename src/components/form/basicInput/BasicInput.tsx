import styles from "./BasicInput.module.css";

interface Props {
    id: string;
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isRequired?: boolean;
}

const BasicInput = ({ id, label, value, onChange, isRequired }: Props) => {
    return (
        <div className={styles.inputTxt}>
            <input type="text"
                name={id}
                id={id}
                value={value}
                onChange={onChange}
                required
                autoComplete="off"/>
            <label htmlFor={id}>{label}</label>
        </div>
    )
}

export default BasicInput
