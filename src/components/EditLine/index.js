import styles from "./index.less";
import StretchDots from "./StretchDots";
import Lines from "./Lines";
import { useSnapshot } from "valtio";
import { canvasStore } from "../../store";
import useEngine from "../../engine/useEngine";

const EditLine = (props) => {
  const { updateSelectedCmp } = useEngine();
  const { currentIndex, components } = useSnapshot(canvasStore);

  const cmp = components.find(i => i.key === currentIndex);

  if (!cmp) {
    // 没有选择线
    return null;
  }

  const { style } = cmp;

  const { width, height } = style;

  const onMouseDownOfCmp = (e) => {
    e.preventDefault();

    let startX = e.pageX;
    let startY = e.pageY;

    const move = (e) => {
      const x = e.pageX;
      const y = e.pageY;
      let disX = x - startX;
      let disY = y - startY;
      updateSelectedCmp({ top: disY, left: disX });
      startX = x;
      startY = y;
    }
    const up = () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseup", up);
    };
    document.addEventListener("mousemove", move);
    document.addEventListener("mouseup", up);
  }
  return <div
    className={styles.main}
    style={{
      zIndex: 99999,
      width,
      height,
      top: style.top,
      left: style.left,
    }}
  >
    {/* // 拖拽组件的有效蒙层 */}
    <div
      className={styles.eventMask}
      style={{
        width,
        height,
      }}
      onMouseDown={() => onMouseDownOfCmp}
    ></div>


    {/* 选中组件的边界线 */}
    <Lines style={{ width, height }} />

    {/* 拉伸组件的八个点 */}
    <StretchDots
      zoom={100}
      style={{
        width,
        height,
      }}
    />

  </div>
}

export default EditLine;
