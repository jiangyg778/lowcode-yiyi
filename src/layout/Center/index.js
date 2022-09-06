import { canvasStore } from "../../store";
import styles from "./index.less";
import { useSnapshot, subscribe } from 'valtio'
import { YiInput } from '../../material/components';
import classNames from "classnames";
import useEngine from "../../engine/useEngine";

//动态组件
let dynamicCmp = { YiInput }

export default function Center() {
  const componentsList = useSnapshot(canvasStore)
  const { setSelectedCmpIndex } = useEngine()
  subscribe(canvasStore, () => {
    console.log(canvasStore, 33333);
  })

  const onDrop = (e) => {
  }

  const allowDrop = (e) => {
  }

  const onMouseDown = (item, index) => {
  }

  return (
    <div id="center" className={styles.main} tabIndex="0">
      <div
        id="canvas"
        className={styles.nav}
        onDrop={onDrop}
        onDragOver={allowDrop}>
      </div>
      <div className={styles.canvas}>
        {componentsList.components?.map((desc, index) => {
          let Cmp = dynamicCmp[desc.componentName]
          return (
            <div
              key={index}
              onMouseDown={() => onMouseDown(desc, index)}
              className={classNames(
                styles.editStyle,
                componentsList.currentIndex === index ? styles.selected : styles.unselected
              )}
            >
              <Cmp style={{ ...desc.style }} {...desc.configure} />
            </div>)
        })}
      </div>
    </div>
  );
}
