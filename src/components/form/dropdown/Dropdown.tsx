import styles from "./Dropdown.module.css";
import { type Categories } from '../../../assets/Interfaces'

interface Props {
    id: string;
    header: string;
    values: Categories[];
    setValue: (category: string) => void;
}

const Dropdown = ({ id, header, values, setValue }: Props) => {
    return (
        <div className={styles.dropdown}>
            <label htmlFor={id} className={styles.header}>{header}</label>
            <select name={id} key={id} id={id} onChange={(e) => setValue(e.target.value)} className={styles.select}>
                {values.map((category) => (
                    <option key={category.id} value={category.name}>
                        {category.name}
                    </option>
                ))}
            </select> 
        </div>
    );
};

export default Dropdown;