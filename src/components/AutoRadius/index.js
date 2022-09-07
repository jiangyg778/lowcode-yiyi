import React, { useState, useEffect } from 'react';
import { Range, NumberPicker } from '@alifd/next';
import styles from './index.less';


const AutoRadiusSetter = (props) => {
  const { onChange, value } = props;

  const [radiusSize, setRadiusSize] = useState(0);
  const [max, setMax] = useState(100);



  useEffect(() => {
    if (value) setRadiusSize(parseInt(value, 10) || 0);
  }, [value]);

  const handleWidthChange = (value) => {
    onChange(value);
  };

  return (
    <div className={styles["auto-width"]}>
      <Range slider="single" value={radiusSize} onChange={handleWidthChange} min={0} max={max} />
      <NumberPicker
        value={radiusSize}
        onChange={handleWidthChange}
        min={0}
        max={max}
        step={1}
        style={{ marginLeft: 16 }}
      />
    </div>
  );
};

export default AutoRadiusSetter;
