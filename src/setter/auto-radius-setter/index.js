import React from 'react'
import AutoRadius from '../../components/AutoRadius'

export default function AutoRadiusSetter({ onChange, value }) {
    const handleChange = (i) => {
        onChange(i)
    }
    return (
        <AutoRadius onChange={handleChange} value={value} />
    )
}

