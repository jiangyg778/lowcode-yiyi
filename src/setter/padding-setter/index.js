import React from 'react'
import Padding from '@/components/Padding/index.js'
export default function PaddingSetter({ onChange, value }) {
    const handleChange = (i) => {
        onChange(i)
    }
    return (
        <Padding onChange={handleChange} value={value} />
    )
}

