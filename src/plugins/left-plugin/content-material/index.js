import React from 'react'
import useEngine from '../../../engine/useEngine';
import styles from "./index.less";
import { meta } from '@/material/index.js';

export default function MaterialContent({ children }) {
    const { addCmp } = useEngine();

    // 增加选中的组件
    const handleAdd = (_cmp) => {
        addCmp(_cmp);
    };

    const onDragStart = (e, cmp) => {
        console.log(cmp, 55566677)
        // 传递当前拖动组件的信息
        e.dataTransfer.setData("drag-cmp", JSON.stringify(cmp));
    }

    return (
        <div className={styles.main}>
            <div className={styles.box}>
                {meta.map((item, index) => (
                    <div
                        key={index}
                        className={styles.item}
                        onClick={() => handleAdd({ ...item })}
                        draggable="true"
                        onDragStart={(e) =>
                            onDragStart(e, item)
                        }
                    >
                        <img width='22px' src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjJweCIgaGVpZ2h0PSI2cHgiIHZpZXdCb3g9IjAgMCAyMiA2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPHRpdGxlPkljb24vbW92ZTwvdGl0bGU+CiAgICA8ZyBpZD0iU3ltYm9scyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9ImxheW91dC9jb21wb25lbnQtbGF5b3V0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTkuMDAwMDAwLCAtOC4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOS4wMDAwMDAsIDguMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiB4PSIwIiB5PSIwIiB3aWR0aD0iMjIiIGhlaWdodD0iNiI+PC9yZWN0PgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTEsMiBDMS41NTIyODQ3NSwyIDIsMS41NTIyODQ3NSAyLDEgQzIsMC40NDc3MTUyNSAxLjU1MjI4NDc1LDAgMSwwIEMwLjQ0NzcxNTI1LDAgMCwwLjQ0NzcxNTI1IDAsMSBDMCwxLjU1MjI4NDc1IDAuNDQ3NzE1MjUsMiAxLDIgWiBNMSw2IEMxLjU1MjI4NDc1LDYgMiw1LjU1MjI4NDc1IDIsNSBDMiw0LjQ0NzcxNTI1IDEuNTUyMjg0NzUsNCAxLDQgQzAuNDQ3NzE1MjUsNCAwLDQuNDQ3NzE1MjUgMCw1IEMwLDUuNTUyMjg0NzUgMC40NDc3MTUyNSw2IDEsNiBaIE01LDIgQzUuNTUyMjg0NzUsMiA2LDEuNTUyMjg0NzUgNiwxIEM2LDAuNDQ3NzE1MjUgNS41NTIyODQ3NSwwIDUsMCBDNC40NDc3MTUyNSwwIDQsMC40NDc3MTUyNSA0LDEgQzQsMS41NTIyODQ3NSA0LjQ0NzcxNTI1LDIgNSwyIFogTTUsNiBDNS41NTIyODQ3NSw2IDYsNS41NTIyODQ3NSA2LDUgQzYsNC40NDc3MTUyNSA1LjU1MjI4NDc1LDQgNSw0IEM0LjQ0NzcxNTI1LDQgNCw0LjQ0NzcxNTI1IDQsNSBDNCw1LjU1MjI4NDc1IDQuNDQ3NzE1MjUsNiA1LDYgWiBNOSwyIEM5LjU1MjI4NDc1LDIgMTAsMS41NTIyODQ3NSAxMCwxIEMxMCwwLjQ0NzcxNTI1IDkuNTUyMjg0NzUsMCA5LDAgQzguNDQ3NzE1MjUsMCA4LDAuNDQ3NzE1MjUgOCwxIEM4LDEuNTUyMjg0NzUgOC40NDc3MTUyNSwyIDksMiBaIE05LDYgQzkuNTUyMjg0NzUsNiAxMCw1LjU1MjI4NDc1IDEwLDUgQzEwLDQuNDQ3NzE1MjUgOS41NTIyODQ3NSw0IDksNCBDOC40NDc3MTUyNSw0IDgsNC40NDc3MTUyNSA4LDUgQzgsNS41NTIyODQ3NSA4LjQ0NzcxNTI1LDYgOSw2IFogTTEzLDIgQzEzLjU1MjI4NDcsMiAxNCwxLjU1MjI4NDc1IDE0LDEgQzE0LDAuNDQ3NzE1MjUgMTMuNTUyMjg0NywwIDEzLDAgQzEyLjQ0NzcxNTMsMCAxMiwwLjQ0NzcxNTI1IDEyLDEgQzEyLDEuNTUyMjg0NzUgMTIuNDQ3NzE1MywyIDEzLDIgWiBNMTMsNiBDMTMuNTUyMjg0Nyw2IDE0LDUuNTUyMjg0NzUgMTQsNSBDMTQsNC40NDc3MTUyNSAxMy41NTIyODQ3LDQgMTMsNCBDMTIuNDQ3NzE1Myw0IDEyLDQuNDQ3NzE1MjUgMTIsNSBDMTIsNS41NTIyODQ3NSAxMi40NDc3MTUzLDYgMTMsNiBaIE0xNywyIEMxNy41NTIyODQ3LDIgMTgsMS41NTIyODQ3NSAxOCwxIEMxOCwwLjQ0NzcxNTI1IDE3LjU1MjI4NDcsMCAxNywwIEMxNi40NDc3MTUzLDAgMTYsMC40NDc3MTUyNSAxNiwxIEMxNiwxLjU1MjI4NDc1IDE2LjQ0NzcxNTMsMiAxNywyIFogTTE3LDYgQzE3LjU1MjI4NDcsNiAxOCw1LjU1MjI4NDc1IDE4LDUgQzE4LDQuNDQ3NzE1MjUgMTcuNTUyMjg0Nyw0IDE3LDQgQzE2LjQ0NzcxNTMsNCAxNiw0LjQ0NzcxNTI1IDE2LDUgQzE2LDUuNTUyMjg0NzUgMTYuNDQ3NzE1Myw2IDE3LDYgWiBNMjEsMiBDMjEuNTUyMjg0NywyIDIyLDEuNTUyMjg0NzUgMjIsMSBDMjIsMC40NDc3MTUyNSAyMS41NTIyODQ3LDAgMjEsMCBDMjAuNDQ3NzE1MywwIDIwLDAuNDQ3NzE1MjUgMjAsMSBDMjAsMS41NTIyODQ3NSAyMC40NDc3MTUzLDIgMjEsMiBaIE0yMSw2IEMyMS41NTIyODQ3LDYgMjIsNS41NTIyODQ3NSAyMiw1IEMyMiw0LjQ0NzcxNTI1IDIxLjU1MjI4NDcsNCAyMSw0IEMyMC40NDc3MTUzLDQgMjAsNC40NDc3MTUyNSAyMCw1IEMyMCw1LjU1MjI4NDc1IDIwLjQ0NzcxNTMsNiAyMSw2IFoiIGlkPSJDb21iaW5lZC1TaGFwZSIgZmlsbD0iI0FCQUNCMiIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==" alt="" />
                        <div style={{ width: 56, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img src={item.screenshot} alt="" />

                        </div>
                        <span>{item.title}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
