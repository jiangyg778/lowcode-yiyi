import React from 'react'
import { Input } from '@alifd/next';
import styles from "../index.less";
export default function YiInput({ style: { width, height }, ...props }) {
  let newStyle = { ...(width && { width: width + 'px' }), ...(height && { height: height + 'px' }) }
  return (
    <div className={styles.main}>
      <Input
        size="large"
        style={{ ...newStyle }}
      />
    </div>
  )
}
