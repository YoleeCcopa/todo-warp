import styles from "./IconButton.module.css";

interface Props {
    type: "edit" | "delete";
    icon: string;
    onClick: () => void;
}

const IconButton = ({ type, icon, onClick }: Props) => {
    return (
        <>
            <button className={`${styles.iconBtn} ${styles[type]}`} onClick={onClick}><i className={icon}></i></button>
        </>
    )
}

export default IconButton

