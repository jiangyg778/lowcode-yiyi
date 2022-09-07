import { canvasStore } from "../../store";
import styles from "./index.less";
import { useSnapshot, subscribe } from 'valtio'
import { dynamicCmp } from '../../material/index.js';
import classNames from "classnames";
import useEngine from "../../engine/useEngine";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
//动态组件

export default function Center() {
  const componentsList = useSnapshot(canvasStore)
  const { setSelectedCmpIndex, updateCmpOrder } = useEngine()

  subscribe(canvasStore, () => {
    console.log(canvasStore, 33333);
  })


  const onMouseDown = (index) => {
    setSelectedCmpIndex(index)
  }

  const renderDragItem = () => {

    let dragElement = null;
    dragElement = componentsList.components?.map((desc, index) => {
      console.log(desc, 8888999)
      let Cmp = dynamicCmp[desc.componentName]
      const dragItem = (
        <Draggable key={desc.key} draggableId={desc.key + ''} index={index}>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
              <div
                key={index}
                onMouseDown={() => onMouseDown(index)}
                className={classNames(
                  styles.editStyle,
                  componentsList.currentIndex === index ? styles.selected : styles.unselected
                )}
              >
                <Cmp style={{ ...desc.style }} {...desc.configure} value={desc.value} />
              </div>
            </div>
          )}
        </Draggable>
      );
      return dragItem;
    });
    return dragElement;
  };

  const handleEnd = (res) => {
    let start = res.source.index
    let end = res.destination.index
    updateCmpOrder(start, end)
  }
  return (
    <div id="center" className={styles.main} tabIndex="0">
      <div className={styles.nav}>
      </div>
      <DragDropContext onDragEnd={handleEnd}>
        <Droppable droppableId="id">
          {(provided) => (
            <div className={styles.canvas} ref={provided.innerRef} {...provided.droppableProps}>
              {renderDragItem()}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

    </div>
  );
}
