import React from 'react'
import useEngine from '../../../engine/useEngine';
import styles from "./index.less";
import { meta } from '@/material/meta.js';

export default function MaterialContent({ children }) {
    const { addCmp } = useEngine();
    // 增加选中的组件
    const handleAdd = (_cmp) => {
        addCmp(_cmp);
    };

    return (
        <div className={styles.main}>
            <div className={styles.box}>
                {meta.map((item, index) => (
                    <div
                        key={index}
                        className={styles.item}
                        onClick={() => handleAdd({ ...item })}
                    >
                        {item.title}
                    </div>
                ))}
            </div>
        </div>
    );
}
