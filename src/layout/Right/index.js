import { useSnapshot } from "valtio";
import Item from "../../components/Item";
import { setterCmp } from "../../setter";
import { canvasStore } from "../../store";
import styles from "./index.less";
export default function Right() {
  const { currentIndex, components } = useSnapshot(canvasStore);
  return (
    <div className={styles.main}>
      {components[currentIndex]?.configure?.props?.map((item) => {
        let Cmp = setterCmp[item.setter?.componentName]
        return <div key={item.name} className={styles.content}>
          <Item label={`${item.title}: `}>
            <Cmp {...item.setter.props} />
          </Item>
        </div>
      })}
    </div>
  );
}
