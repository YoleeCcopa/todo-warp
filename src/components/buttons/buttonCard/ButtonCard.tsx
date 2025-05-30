import styles from "./ButtonCard.module.css";

interface Props {
    id: string;
    icon: string;
    name: string;
}

const ButtonCard = ({ id, icon, name }: Props) => {
    return (
        <button className={styles.iconCard} key={id} id={id}>
            <i className={icon}></i>
            <label htmlFor={id}>{name}</label>
        </button>
    )
}

export default ButtonCard
