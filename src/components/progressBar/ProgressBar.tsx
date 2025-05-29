import styles from "./ProgressBar.module.css";

const ProgressBar = () => {
    return (
        <div>
            <h2>Total progress</h2>
            <div className={styles.progressBar}>
                <p className={styles.value}>20</p>
                <div className={styles.bar}></div>
            </div>
        </div>
    )
}

export default ProgressBar
