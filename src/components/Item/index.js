import styles from "./index.less";

export default function Item({ label, children }) {
    return (
        <div className={styles.main}>
            <div>
                <label>{label}</label>
            </div>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
}
