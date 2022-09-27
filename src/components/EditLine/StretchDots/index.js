import { Component } from "react";
import useEngine from "../../../engine/useEngine";
import styles from "./index.less";

const StretchDots = ({ style }) => {
  const { updateSelectedCmp } = useEngine()

  const { width, height, transform } = style;

  const onMouseDown = (e) => {
    const direction = e.target.dataset.direction;
    if (!direction) {
      return;
    }
    e.stopPropagation();
    e.preventDefault();

    let startX = e.pageX;
    let startY = e.pageY;

    const move = (e) => {
      const x = e.pageX;
      const y = e.pageY;
      let disX = x - startX;
      let disY = y - startY;
      let newStyle = {};
      if (direction) {
        if (direction.indexOf("top") >= 0) {
          disY = 0 - disY;
          newStyle.top = -disY;
        }
        if (direction.indexOf("left") >= 0) {
          disX = 0 - disX;
          newStyle.left = -disX;
        }
      }
      Object.assign(newStyle, {
        width: disX,
        height: disY,
      });
      console.log(newStyle, 888999);
      updateSelectedCmp(newStyle);

      startX = x;
      startY = y;
    };

    const up = () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseup", up);

    };
    document.addEventListener("mousemove", move);
    document.addEventListener("mouseup", up);
  };
  return (
    <>
      <div
        className={styles.stretchDot}
        style={{
          top: -8,
          left: -8,
          transform,
          cursor: "nwse-resize",
        }}
        data-direction="top, left"
        onMouseDown={onMouseDown}
      />

      <div
        className={styles.stretchDot}
        style={{
          top: -8,
          left: width / 2 - 8,
          transform,
          cursor: "row-resize",
        }}
        data-direction="top"
        onMouseDown={onMouseDown}
      />

      <div
        className={styles.stretchDot}
        style={{
          top: -8,
          left: width - 8,
          transform,
          cursor: "nesw-resize",
        }}
        data-direction="top right"
        onMouseDown={onMouseDown}
      />

      <div
        className={styles.stretchDot}
        style={{
          top: height / 2 - 8,
          left: width - 8,
          transform,
          cursor: "col-resize",
        }}
        data-direction="right"
        onMouseDown={onMouseDown}
      />

      <div
        className={styles.stretchDot}
        style={{
          top: height - 8,
          left: width - 8,
          transform,
          cursor: "nwse-resize",
        }}
        data-direction="bottom right"
        onMouseDown={onMouseDown}
      />

      <div
        className={styles.stretchDot}
        style={{
          top: height - 8,
          left: width / 2 - 8,
          transform,
          cursor: "row-resize",
        }}
        data-direction="bottom"
        onMouseDown={onMouseDown}
      />

      <div
        className={styles.stretchDot}
        style={{
          top: height - 8,
          left: -8,
          transform,
          cursor: "nesw-resize",
        }}
        data-direction="bottom left"
        onMouseDown={onMouseDown}
      />
      <div
        className={styles.stretchDot}
        style={{
          top: height / 2 - 8,
          left: -8,
          transform,
          cursor: "col-resize",
        }}
        data-direction="left"
        onMouseDown={onMouseDown}
      />
    </>
  )
}

export default StretchDots;
