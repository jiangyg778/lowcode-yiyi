import React from 'react'
import ColorPicker from '@/components/ColorPicker/index.js'
export default function ColorPickerSetter({ onChange, value }) {
    const handleChange = (i) => {
        onChange(i)
    }
    return (
        <ColorPicker onChange={handleChange} value={value} />
    )
}
