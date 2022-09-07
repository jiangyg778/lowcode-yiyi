import React from 'react';
import { NumberPicker, Checkbox, Switch } from '@alifd/next';
import styles from './index.less';
import classNames from "classnames";



class PaddingSetter extends React.Component {
    state = {
        top: 12,
        bottom: 12,
        left: 12,
        right: 12,
        applyAllSides: false,
        checked: false,
        showTip: false,
        tips: '',
        node: {},
        limit: {
            top: { min: -Infinity, max: Infinity },
            right: { min: Infinity, max: Infinity },
            bottom: { min: -Infinity, max: Infinity },
            left: { min: -Infinity, max: Infinity },
        },
    };
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        const { value } = nextProps;
        if (value && Object.keys(value).length) {
            const { top, bottom, left, right } = value;
            return {
                top: top || 12,
                bottom: bottom || 12,
                left: left || 12,
                right: right || 12,
                checked: value?.switch ?? true,
            };
        }
        return null;
    }

    getParentContainer = (node) => {
        while (node && !node.isContainer) {
            node = node.parent;
        }
        return node;
    };
    onChange = (dir, val) => {
        if (val < 12) {
            this.setState({
                showTip: true,
                tips: "You've reached the limit for padding. Left and right padding has a minimum limit of 12px. This is to prevent display issues on certain phone screen",
            });
        } else if (val > 40) {
            this.setState({
                showTip: true,
                tips: "You've reached the limit for padding. Left and right padding has a maximum limit of 40px. This is to prevent display issues on certain phone screen",
            });
        } else {
            this.setState({ showTip: false, tips: '' });
        }
        const { onChange } = this.props;
        const { top, left, bottom, right, checked } = this.state;
        // eslint-disable-next-line default-case
        switch (dir) {
            case 'top':
                this.setState({ top: val });
                onChange({ top: val, bottom, right, left, switch: checked });
                break;
            case 'bottom':
                this.setState({ bottom: val });
                onChange({ bottom: val, top, right, left, switch: checked });
                break;
            case 'left':
                this.setState({ left: val });
                onChange({ left: val, top, bottom, right, switch: checked });
                break;
            case 'right':
                this.setState({ right: val });
                onChange({ right: val, top, bottom, left, switch: checked });
                break;
        }
        if (this.state.applyAllSides) {
            this.setState({ top: val, bottom: val, left: val, right: val });
            onChange({
                top: val,
                bottom: val,
                left: val,
                right: val,
                applyAllSides: this.state.applyAllSides,
                switch: checked,
            });
        }
    };

    applyAllSides = (checked) => {
        const { onChange } = this.props;
        this.setState({ applyAllSides: checked });
        const { top, left, bottom, right } = this.state;
        onChange({ top, bottom, left, right, applyAllSides: checked, switch: this.state.checked });
    };

    onEnableChange = (v) => {
        this.setState({ checked: v });
        const { node, top, bottom, left, right } = this.state;
        // 开关关闭后要恢复默认padding
        if (!v) {
            // 容器组件按照设计稿都会有12px的默认内边距，非容器组件默认没有内边距
            this.props.onChange({
                top: 12,
                bottom: 12,
                left: 12,
                right: 12,
                switch: v,
            })
        } else {
            // (node as any).setPropValue('style', { padding: `${top}px ${right}px ${bottom}px ${left}px` });
            this.props.onChange({
                top,
                bottom,
                left,
                right,
                switch: v,
            });
        }
    };

    render() {
        const { showTip, tips } = this.state;
        return (
            <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-30px', right: '0px', height: '32px' }}>
                    <Switch
                        autoWidth
                        size="small"
                        checked={this.state.checked}
                        onChange={this.onEnableChange}
                        checkedChildren="ON"
                    />
                </div>
                <div className={classNames(this.state.checked ? styles['panel-open'] : styles['panel-close'])}>
                    <Checkbox style={{ marginLeft: '-60px', width: 200, textAlign: 'start', marginBottom: 5 }} onChange={this.applyAllSides}>Apply to all sides</Checkbox>
                    <div className={styles['padding-space']}>
                        <div className={styles["padding-space-item"]}>
                            <span className={styles["label"]}>Left</span>
                            <NumberPicker
                                size="small"
                                style={{ width: '121px' }}
                                className={styles["lowcode-setter-number"]}
                                min={this.state.limit.left.min}
                                max={this.state.limit.left.max}
                                step={1}
                                value={this.state.left}
                                defaultValue={this.state.left}
                                onChange={(val) => {
                                    this.onChange('left', val);
                                }}
                            />
                        </div>
                        <div className={styles["padding-space-item"]}>
                            <span className={styles["label"]}>Right</span>
                            <NumberPicker
                                size="small"
                                style={{ width: '121px' }}
                                className={styles["lowcode-setter-number"]}
                                min={this.state.limit.right.min}
                                max={this.state.limit.right.max}
                                step={1}
                                value={this.state.right}
                                defaultValue={this.state.right}
                                onChange={(val) => {
                                    this.onChange('right', val);
                                }}
                            />
                            {/* 气泡 */}
                            <div className={styles["ballon-bySelf"]} style={{ display: showTip ? 'block' : 'none' }}>
                                <div className={styles["arrow"]}>
                                    <div className={styles["arrow-content"]}></div>
                                </div>
                                <div className={styles["content"]}>{tips}</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles['padding-space']}>
                        <div className={styles["padding-space-item"]}>
                            <span className={styles["label"]}>Top</span>
                            <NumberPicker
                                size="small"
                                style={{ width: '121px' }}
                                className={styles["lowcode-setter-number"]}
                                min={this.state.limit.top.min}
                                max={this.state.limit.top.max}
                                step={1}
                                onBlur={() => {
                                    this.setState({ showTip: false });
                                }}
                                value={this.state.top}
                                defaultValue={this.state.top}
                                onChange={(val) => {
                                    this.onChange('top', val);
                                }}
                            />
                        </div>
                        <div className={styles["padding-space-item"]}>
                            <span className={styles["label"]}>Bottom</span>
                            <NumberPicker
                                size="small"
                                style={{ width: '121px' }}
                                className={styles["lowcode-setter-number"]}
                                min={this.state.limit.bottom.min}
                                max={this.state.limit.bottom.max}
                                step={1}
                                onBlur={() => {
                                    this.setState({ showTip: false });
                                }}
                                value={this.state.bottom}
                                defaultValue={this.state.bottom}
                                onChange={(val) => {
                                    this.onChange('bottom', val);
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default PaddingSetter;
