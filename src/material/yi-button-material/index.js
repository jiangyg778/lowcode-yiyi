import React from 'react'
import { Button } from '@alifd/next';
import { getRealityStyle } from '../../utils';
import styles from "../index.less";
import { defaultCommonStyle } from '../../utils/const';
export default function YiButton({ value = 'cancel', style: { left, top, backgroundColor, padding, border, radius, textAlign = 'center', fullWidth = false, width, height }, ...others }) {

    let newStyle = getRealityStyle({ backgroundColor }) //样式转换

    let paddingStyle = {
        paddingLeft: padding?.left ? padding?.left + 'px' : 0,
        paddingRight: padding?.right ? padding?.right + 'px' : 0,
        paddingTop: padding?.top ? padding?.top + 'px' : 0,
        paddingBottom: padding?.bottom ? padding?.bottom + 'px' : 0,

    }

    let borderStyle = {
        ...(border?.height && {
            border: `${border?.height}px ${border?.type} ${border?.color} `
        }),
        ...(radius && { borderRadius: `${radius}px` }),
        top: top ? top + 'px' : 0,
        left: left ? left + 'px' : 0,
    }

    console.log(textAlign, 33344)

    return (
        <Button style={{ ...defaultCommonStyle, width, height, ...(fullWidth && { width: "100%" }), ...newStyle, ...paddingStyle, ...borderStyle, height: 40 }}>{value}</Button>
    )
}
