import styles from "./Dropdown.module.css";

interface Props {
    id: string;
    header: string;
    values: string[];
    setValue: (category: string) => void;
}

const Dropdown = ({ id, header, values, setValue }: Props) => {
    return (
        <div className={styles.dropdown}>
            <label htmlFor={id} className={styles.header}>{header}</label>
            <select name={id} id={id} onChange={(e) => setValue(e.target.value)} className={styles.select}>
                {values.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select> 
        </div>
    );
};

export default Dropdown;