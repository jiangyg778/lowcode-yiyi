// import React from 'react';
import React, { useEffect, useState } from 'react';
import { Radio } from '@alifd/next';
import AlignLeft from './images/align-left.svg';
import AlignCenter from './images/align-middle.svg';
import AlignRight from './images/align-right.svg';
import AlignLeftActive from './images/align-left-active.svg';
import AlignCenterActive from './images/align-middle-active.svg';
import AlignRightActive from './images/align-right-active.svg';
import styles from './index.less';

const RadioGroup = Radio.Group;

// const AlignLeft = require('./images/align-left.svg')
// const AlignCenter = require('./images/align-middle.svg')
// const AlignRight = require('./images/align-right.svg')
// const AlignLeftActive = require('./images/align-left-active.svg')
// const AlignCenterActive = require('./images/align-middle-active.svg')
// const AlignRightActive = require('./images/align-right-active.svg')



export default function TextAlignNewSetter(props) {
  const [setterValue, setSetterValue] = useState(props.value || 'center');
  const [initFlag, setInitFlag] = useState(false);
  const [list, setList] = useState([
    {
      value: 'left',
      label: <img src={AlignLeft} className={styles["icon_image"]} alt="" />,
    },
    {
      value: 'center',
      label: <img src={AlignCenter} className={styles["icon_image"]} alt="" />,
    },
    {
      value: 'right',
      label: <img src={AlignRight} className={styles["icon_image"]} alt="1" />,
    },
  ]);



  const handleChange = (val) => {
    const { onChange, } = props;
    onChange?.(val);

  };

  const handleChangeImg = (val) => {
    switch (val) {
      case 'left':
        setList([
          {
            value: 'left',
            label: <img src={AlignLeftActive} className={styles["icon_image"]} alt="" />,
          },
          {
            value: 'center',
            label: <img src={AlignCenter} className={styles["icon_image"]} alt="" />,
          },
          {
            value: 'right',
            label: <img src={AlignRight} className={styles["icon_image"]} alt="" />,
          },
        ]);
        break;
      case 'center':
        setList([
          {
            value: 'left',
            label: <img src={AlignLeft} className={styles["icon_image"]} alt="" />,
          },
          {
            value: 'center',
            label: (
              <img src={AlignCenterActive} className={styles["icon_image"]} alt="" />
            ),
          },
          {
            value: 'right',
            label: <img src={AlignRight} className={styles["icon_image"]} alt="" />,
          },
        ]);
        break;
      case 'right':
        setList([
          {
            value: 'left',
            label: <img src={AlignLeft} className={styles["icon_image"]} alt="" />,
          },
          {
            value: 'center',
            label: <img src={AlignCenter} className={styles["icon_image"]} alt="" />,
          },
          {
            value: 'right',
            label: <img src={AlignRightActive} className={styles["icon_image"]} alt="" />,
          },
        ]);
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    setSetterValue(props.value || 'center');
    handleChangeImg(props.value || 'center');
    if (!initFlag) {
      if (!props.value) {
        handleChange('center');
      }
      setInitFlag(true);
    }
  }, [props.value]);

  return (
    <div className={styles["text-align-new-setter"]}>
      <RadioGroup
        dataSource={list}
        shape="button"
        defaultValue={setterValue}
        onChange={handleChange}
      />
    </div>
  );
}
