import * as React from 'react';
import { Input, Balloon } from '@alifd/next';
import { SketchPicker } from 'react-color';
import styles from './index.less';

export default class ColorPicker extends React.Component {
    static displayName = 'BackgroundColorSetter';
    constructor(props) {
        super(props);
        this.state = {
            width: -92,
            setterValue: null,
        };
    }
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
    static getDerivedStateFromProps(nextProps, prevState) {

        const { value, defaultValue } = nextProps;
        if (prevState.setterValue == null) {
            if (value == undefined && defaultValue) {
                return {
                    setterValue: defaultValue,
                };
            }
        }
        return {
            setterValue: value,
        };
    }

    handleChange = (color) => {
        const { onChange } = this.props;
        onChange(color.hex)
    };

    render() {
        const { width, setterValue } = this.state;
        const { onChange } = this.props;
        const InputTarget = (
            <Input
                size="small"
                className={styles["lowcode-setter-color"]}
                style={{ width: '100%' }}
                innerBefore={<div className={styles["color-box"]} style={{ backgroundColor: setterValue }} />}
                value={setterValue}
                onChange={onChange}
            />
        );
        return (
            <div
                style={{ padding: 0, width: 199 }}
            >
                <Balloon
                    needAdjust
                    align="tr"
                    offset={[width, 0]}
                    trigger={InputTarget}
                    triggerType="click"
                    closable={false}
                >
                    <SketchPicker color={setterValue} onChange={this.handleChange} />
                </Balloon>
            </div>
        );
    }
}
