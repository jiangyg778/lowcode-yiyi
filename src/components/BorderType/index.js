import React from 'react';
import { NumberPicker, Select, Input, Balloon, Switch } from '@alifd/next';
import { SketchPicker } from 'react-color';
import styles from './index.less';
import classNames from 'classnames';

const Option = Select.Option;



class BorderLineTypeSetter extends React.Component {
  state = {
    fontSize: 12,
    fontFamily: 'frank',
    width: -92,
    color: '#4477EE', //border-color
    height: 1, //高度
    type: 'Solid', //类型
    checked: false,
  };
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { value, defaultValue } = nextProps;
    if (prevState.setterValue == null) {
      if (value == undefined && defaultValue) {
        return {
          ...defaultValue,
          height: defaultValue?.height || defaultValue?.radius || 1,
        };
      }
    }
    return {
      ...value,
      height: value?.height || value?.radius || 1,
      checked: value?.switch,
    };
  }

  //

  componentDidMount() {
    this.screenChange();
    this.changeWidth();
  }
  /**
   * 屏幕分辨率监听
   */
  screenChange = () => {
    window.addEventListener('resize', this.changeWidth);
  };
  /**
   * 屏幕分辨率 变换 =>  改变冒泡框的位置
   */
  changeWidth = () => {
    this.setState({ width: document.body.clientWidth < 1860 ? -92 : -138 });
  };
  componentWillUnmount() {
    window.removeEventListener('resize', this.changeWidth);
  }

  onChange = (name, value) => {
    const { onChange, field, editType = 'height', direction = 'borderTop' } = this.props;

    const { color, type, height, checked } = this.state;

    const style = {};
    if (name === 'type') {
      this.setState({ type: value }, () => {
        let styleParams =
          editType === 'height'
            ? {
              ...style,
              [direction]: `${height}px ${value} ${color}`,
            }
            : {
              ...style,
              border: `1px ${value} ${color}`,
              borderRadius: `${height}px`,
            };
        onChange({ color, type: value, [editType]: height, switch: checked });
      });
    } else if (name === 'height') {
      this.setState({ height: value }, () => {
        let styleParams =
          editType === 'height'
            ? {
              ...style,
              [direction]: `${value}px ${type} ${color}`,
            }
            : {
              ...style,
              border: `1px ${type} ${color}`,
              borderRadius: `${value}px`,
            };
        onChange({ color, type, [editType]: value, switch: checked });
      });
    } else if (name === 'color') {
      const { rgb, hex } = value;
      const { r, g, b, a } = rgb;
      let realColor = '';
      if (a === 1) {
        realColor = hex;
      } else {
        realColor = `rgba(${r},${g},${b},${a})`;
      }
      this.setState({ color: realColor }, () => {
        let styleParams =
          editType === 'height'
            ? {
              ...style,
              [direction]: `${height}px ${type} ${realColor}`,
            }
            : {
              ...style,
              border: `1px ${type} ${realColor}`,
              borderRadius: `${height}px`,
            };
        onChange({ color: realColor, type, [editType]: height, switch: checked });
      });
      value = realColor;
    }
  };

  onEnableChange = (v) => {
    this.setState({ checked: v });
    const { onChange, field, editType = 'height', direction = 'borderTop' } = this.props;
    const { color, type, height } = this.state;

    const style = {};

    let styleParams = {};
    // 开关关闭后要恢复默认padding
    if (!v) {
      styleParams =
        editType === 'height'
          ? {
            ...style,
            [direction]: `1px ${type} ${color}`,
          }
          : {
            ...style,
            border: `0px ${type} ${color}`,
            borderRadius: `0px`,
          };
      onChange({
        color,
        [editType]: 0,
        type,
        switch: v,
      });
    } else {
      styleParams =
        editType === 'height'
          ? {
            ...style,
            [direction]: `${height}px ${type} ${color}`,
          }
          : {
            ...style,
            border: `1px ${type} ${color}`,
            borderRadius: `${height}px`,
          };
      onChange({
        color,
        [editType]: height,
        type,
        switch: v,
      });
    }
  };

  render() {
    const { width, color, height } = this.state;
    const InputTarget = (
      <Input
        size="small"
        className={styles["lowcode-setter-color"]}
        style={{ width: '100%' }}
        innerBefore={<div className={styles["color-box"]} style={{ backgroundColor: color }} />}
        value={color}
        onChange={(val) => this.onChange('color', val)}
      />
    );

    return (
      <div className={styles["border-setting"]} style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', top: '-30px', right: '15px', height: '32px' }}>
          <Switch
            autoWidth
            size="small"
            checked={this.state.checked}
            onChange={this.onEnableChange}
            checkedChildren="ON"
          />
        </div>
        <div className={classNames(styles['border-setting-content'], this.state.checked ? styles['panel-open'] : styles['panel-close'])}>
          <div style={{ width: 121, display: 'flex' }}>
            <Select
              style={{ width: '100%' }}
              onChange={(val) => {
                this.onChange('type', val);
              }}
              defaultValue="Solid"

            >
              <Option value="Solid">Solid</Option>
              <Option value="Dashed">Dashed</Option>
              <Option value="Dotted">Dotted</Option>
            </Select>
          </div>
          <div className={styles["border-radius"]} >
            <NumberPicker
              size="small"
              style={{ width: 121 }}
              className={styles["lowcode-setter-number"]}
              min={0}
              step={1}
              value={height}
              placeholder={this.props.editType === 'radius' ? 'Radius' : 'Height'}
              onChange={(val) => {
                this.onChange('height', val);
              }}
            />
          </div>
        </div>
        <div style={{ marginTop: 5, width: 257 }} className={classNames(this.state.checked ? styles['panel-open'] : styles['panel-close'])}>
          <Balloon
            needAdjust
            align="tr"
            offset={[width, 0]}
            style={{ padding: 0 }}
            trigger={InputTarget}
            triggerType="click"
            closable={false}
          >
            <SketchPicker color={color} onChange={(val) => this.onChange('color', val)} />
          </Balloon>
        </div>
      </div>
    );
  }
}

export default BorderLineTypeSetter;
