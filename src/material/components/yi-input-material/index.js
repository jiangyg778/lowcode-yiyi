import React from 'react'
import { Input } from '@alifd/next';
import styles from "../index.less";
export default function YiInput({ style, ...props }) {
  return (
    <div className={styles.main}>
      <Input
        size="large"
        {...style}
      />
    </div>
  )
}
