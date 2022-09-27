import { useSnapshot } from "valtio";
import Item from "../../components/Item";
import { setterCmp } from "../../setter";
import { canvasStore } from "../../store";
import styles from "./index.less";
import useEngine from '@/engine/useEngine';

export default function Right() {
  const { currentIndex, components } = useSnapshot(canvasStore);
  const { updateSelectedCmp } = useEngine();
  console.log(currentIndex, components, 33334411)
  //更新到store
  const changeName = (key, value) => {
    console.log(key, value, 9999);
    if (key === 'value') {
      updateSelectedCmp(null, value)
    } else {
      updateSelectedCmp({ [key]: value })
    }
  }

  return (
    <div className={styles.main}>
      {components.find(i => i.key === currentIndex)?.configure?.props?.map((item) => {
        let Cmp = setterCmp[item.setter?.componentName]
        return <div key={item.name} className={styles.content}>
          <Item label={`${item.title}`}>
            <Cmp
              {...item.setter}
              name={item.name}
              value={item?.name === 'value' ? item.value : ''}
              onChange={(v) => changeName(item.name, v)} />
          </Item>
        </div>
      })}
    </div>
  );
}
