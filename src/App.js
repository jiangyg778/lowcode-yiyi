import React, { useEffect } from 'react'
import Header from "./layout/Header";
import Left from "./layout/Left";
import Center from "./layout/Center";
import Right from "./layout/Right";
import styles from "./App.less";
import '@alifd/next/dist/next.css';
import pluginRegister from "./plugins";
import './App.less'


export default function App(props) {
  pluginRegister() // 插件注册

  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.content}>
        <Left />
        <Center />
        <Right />
      </div>
    </div>
  );
}


