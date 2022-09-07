import React from 'react'
import { Button } from '@alifd/next';
import { getRealityStyle } from '../../utils';
export default function YiButton({ value = 'cancel', style: { backgroundColor, padding, border, radius, textAlign = 'center', fullWidth = false }, ...others }) {
    let newStyle = getRealityStyle({ backgroundColor })
    let paddingStyle = {
        paddingLeft: padding?.left ? padding?.left + 'px' : 0,
        paddingRight: padding?.right ? padding?.right + 'px' : 0,
        paddingTop: padding?.top ? padding?.top + 'px' : 0,
        paddingBottom: padding?.bottom ? padding?.bottom + 'px' : 0,

    }
    let borderStyle = {
        border: border?.height ? `${border?.height}px ${border?.type} ${border?.color} ` : 0,
        borderRadius: radius ? `${radius}px` : 0,
    }
    console.log(textAlign, 33344)

    return (
        <div style={{ textAlign }}>
            <Button style={{ height: '100%', ...(fullWidth && { width: "100%" }), ...newStyle, ...paddingStyle, ...borderStyle, }}>{value}</Button>
        </div>
    )
}
