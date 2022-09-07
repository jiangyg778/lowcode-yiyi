import React from 'react'
import { Input } from '@alifd/next';
import styles from "../index.less";
import { getRealityStyle } from '../../utils';


export default function YiInput({ style: { width, height }, value = '', ...others }) {
  let newStyle = getRealityStyle({ width, height })
  return (
    <div className={styles.main}>
      <Input
        size="large"
        style={{ ...newStyle }}
        value={value}
      />
    </div>
  )
}
