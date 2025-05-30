import styles from "./Dropdown.module.css";
import type { Category } from '../../../assets/Interfaces'

interface Props {
    id: string;
    header: string;
    items: Category[];
    value: string;
    placeholder: string;
    setValue: (category: string) => void;
    isRequired?: boolean;
}

const Dropdown = ({ id, header, items, value, placeholder, setValue, isRequired }: Props) => {
    return (
        <div className={styles.dropdown}>
            <label htmlFor={id} className={styles.header}>{header}</label>
            <select
                name={id}
                id={id}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className={styles.select} required
            >
                <option value="" disabled>{placeholder}</option>
                {items.map((category) => (
                    <option key={category.id} value={category.name}>
                        {category.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Dropdown;