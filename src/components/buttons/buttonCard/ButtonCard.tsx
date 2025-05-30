import styles from "./ButtonCard.module.css";

interface Props {
    id: string;
    icon: string;
    name: string;
    onClick: () => void;
}

const ButtonCard = ({ id, icon, name, onClick }: Props) => {
    return (
        <button className={styles.iconCard} key={id} id={id}
            onClick={onClick}>
            <i className={icon}></i>
            <label htmlFor={id}>{name}</label>
        </button>
    )
}

export default ButtonCard
