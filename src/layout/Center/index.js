import { canvasStore } from "../../store";
import styles from "./index.less";
import { useSnapshot, subscribe } from 'valtio'
import { dynamicCmp } from '../../material/index.js';
import classNames from "classnames";
import useEngine from "../../engine/useEngine";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { getCanvasPosition } from "../../utils";
import { useCallback } from 'react'
import EditLine from "../../components/EditLine";
//动态组件
export default function Center() {
  const componentsList = useSnapshot(canvasStore)
  const { addCmp, getSelectedCmp } = useEngine()

  subscribe(canvasStore, () => {
    console.log(canvasStore, 33333);
  })


  // 拖动进容器触发
  const onDrop = (e) => {
    console.log(getSelectedCmp(), 55555);
    let data = getCanvasPosition(e,)
    addCmp(data)
  }

  return (
    <div id="center" className={styles.main} tabIndex="0">
      <div
        className={styles.nav}
      >
        撤销
      </div>
      <div
        id="canvas"
        className={styles.canvas}
        onDrop={onDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        {/* 拉升拖动线 */}
        {componentsList.currentIndex && (
          <EditLine selectedIndex={componentsList.currentIndex} zoom={100} />
        )}
        {/* 画布组件 */}
        {componentsList.components?.map((desc, index) => {
          let Cmp = dynamicCmp[desc.componentName]
          return (
            <Cmp style={{ ...desc.style }} {...desc.configure} key={desc.key} />
          )
        })}
      </div>
    </div>
  )
}
