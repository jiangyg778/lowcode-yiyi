import styles from "./index.less";
import { pluginStore } from "../../store";
import ControlPlugin from "../../components/ControlPlugin";

export default function Header() {

  const handleChange = (i) => {
  }

  return (
    <div className={styles.main}>
      <ControlPlugin value={pluginStore.headerPlugin} onChange={handleChange} />
    </div>
  );
}
