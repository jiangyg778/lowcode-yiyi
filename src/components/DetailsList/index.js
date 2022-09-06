import useEngine from "../../engine/useEngine";
import styles from "./index.less";
const defaultStyle = {
    position: "absolute",
    top: 1,
    left: 0,
    width: 80,
    height: 30,
    lineHeight: "30px",
    fontSize: 12,
    fontWeight: "normal",
    color: "#000",
    backgroundColor: "#ffffff00",
    textAlign: "left",
    borderRadius: "0%",
    borderStyle: "none",
    borderWidth: "0",
    borderColor: "#ffffff00",
};


export default function DetailsList({ children }) {
    return (
        <div className={styles.main}>
            {children}
        </div>
    );
}
