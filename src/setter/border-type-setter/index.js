import React from 'react'
import BorderType from '@/components/BorderType'
export default function BorderTypeSetter({ onChange, value }) {
    const handleChange = (i) => {
        onChange(i)
    }
    return (
        <BorderType onChange={handleChange} value={value} />
    )
}

