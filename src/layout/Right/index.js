import { useSnapshot } from "valtio";
import Item from "../../components/Item";
import { setterCmp } from "../../setter";
import { canvasStore } from "../../store";
import styles from "./index.less";
import useEngine from '@/engine/useEngine';

export default function Right() {
  const { currentIndex, components } = useSnapshot(canvasStore);
  const { updateSelectedCmp } = useEngine();

  //更新到store
  const changeName = (key, value) => {
    updateSelectedCmp({ [key]: value })
  }

  return (
    <div className={styles.main}>
      {components[currentIndex]?.configure?.props?.map((item) => {
        let Cmp = setterCmp[item.setter?.componentName]
        return <div key={item.name} className={styles.content}>
          <Item label={`${item.title}: `}>
            <Cmp
              {...item.setter}
              name={item.name}
              value={components[currentIndex]?.style[item.name] ?? ''}
              onChange={(v) => changeName(item.name, v)} />
          </Item>
        </div>
      })}
    </div>
  );
}
