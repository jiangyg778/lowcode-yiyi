import React, { useEffect, useState } from 'react';
import { Switch } from '@alifd/next';

export default function BooleanSetter({ value, onChange }) {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(value || false);
  }, [value]);

  const onEnableChange = (i) => {
    onChange(i);
  };
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', top: -32, right: '-258px', height: '32px' }}>
        <Switch
          size="small"
          checked={checked} onChange={onEnableChange} />
      </div>
    </div>
  );
}
