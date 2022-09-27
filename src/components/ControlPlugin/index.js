import { useState } from "react";
import DetailsList from "../../components/DetailsList";
import styles from "./index.less";
import { Icon, Drawer, Button } from '@alifd/next';

export default function ControlPlugin({ value, onChange }) {
    const [showSide, setShowSide] = useState(false);
    const [currentNode, setCurrentNode] = useState(null);

    const handleClick = (i) => {
        setCurrentNode(i?.content)
        onChange(i)
    }

    // leftPlugin样式展示
    const showArea = (where) => {
        return value?.map((i, index) => {
            const { type, value, attrs = {} } = i?.props || {};
            if (i.align === where) {
                // 图片
                if (type === 'image') {
                    return (
                        <img src={value} alt='' style={{ height: 30 }} {...attrs} key={index} />
                    )
                } else if (type === "icon") {
                    // icon
                    return (
                        <div className={styles.cmp} onClick={() => setShowSide(!showSide)} key={index}>
                            <span onClick={() => { handleClick(i) }}>{<Icon type={value} {...attrs} />}</span>
                        </div>
                    )
                } else if (type === "text") {
                    // 文本
                    return (
                        <div className={styles.cmp} onClick={() => setShowSide(!showSide)} key={index}>
                            <span onClick={() => { handleClick(i) }} {...attrs}>{value}</span>
                        </div>
                    )
                } else if (type === "button") {
                    // 按钮
                    return (
                        <div className={styles.cmp} onClick={() => setShowSide(!showSide)} key={index}>
                            <Button onClick={() => { handleClick(i) }} {...attrs}>{value}</Button>
                        </div>
                    )
                } else {
                    return null
                }
            } else {
                return null
            }
        })
    }
    return (
        <>
            {/* left顶部 */}
            <div className="start">
                {showArea('start')}
            </div>
            {/* left底部 */}
            <div className="end">
                {showArea('end')}
            </div>
            <Drawer
                title="标题"
                visible={showSide}
                placement='left'
                onClose={() => setShowSide(false)}
                hasMask={false}
                style={{ left: 30 }}
                left={30}
                width={300}
            >
                <DetailsList >
                    {currentNode}
                </DetailsList>
            </Drawer>
        </>
    );
}
