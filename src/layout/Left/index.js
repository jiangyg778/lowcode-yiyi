import styles from "./index.less";
import { pluginStore } from "../../store";
import ControlPlugin from "../../components/ControlPlugin";

export default function Left() {

  const handleChange = (i) => {
    console.log(i, 33333444)
  }

  return (
    <div className={styles.main}>
      <ControlPlugin value={pluginStore.LeftPlugin} onChange={handleChange} />
    </div>
  );
}
