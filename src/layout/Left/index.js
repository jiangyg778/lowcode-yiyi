import { useState } from "react";
import DetailsList from "../../components/DetailsList";
import styles from "./index.less";
import { Icon, Drawer } from '@alifd/next';
import { pluginStore } from "../../store";

export default function Left(props) {
  const [showSide, setShowSide] = useState(false);
  const [currentNode, setCurrentNode] = useState(null);


  return (
    <div className={styles.main}>
      {pluginStore?.LeftPlugin?.map((i, index) => {
        const { icon = '', description = '插件名称' } = i?.props || {};
        return (
          <div className={styles.cmp} onClick={() => setShowSide(!showSide)} key={index}>
            <span onClick={() => { setCurrentNode(i?.content) }}>{icon ? <Icon type={icon} /> : description}</span>
          </div>
        )
      })}

      <div>
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

      </div>

    </div >
  );
}
