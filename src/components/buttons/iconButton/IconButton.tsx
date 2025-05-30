import styles from "./IconButton.module.css";

interface Props {
    type: "edit" | "delete" | "restore";
    icon: string;
    onClick: () => void;
    disabled?: boolean;
}

const IconButton = ({ type, icon, onClick, disabled }: Props) => {
    return (
        <>
            {!disabled ? (
                <button className={`${styles.iconBtn} ${styles[type]}`} onClick={onClick}><i className={icon}></i></button>
                ) : (
                <button className={`${styles.iconBtn} ${styles.disabled}`} onClick={onClick} disabled><i className={icon}></i></button>
            )}
        </>
    )
}

export default IconButton

