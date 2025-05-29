import type { ReactNode } from "react";
import styles from "./Container.module.css";

interface Props {
    children: ReactNode;
}

const Container = ({ children }: Props) => {
    return (
        <main className={styles.container}>
            {children}
        </main>
    )
}

export default Container
