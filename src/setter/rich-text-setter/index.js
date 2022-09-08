import React from 'react'
import RichText from '../../components/RichText'
export default function RichTextSetter({ onChange, value }) {
    const handleChange = (i) => {
        onChange(i)
    }
    return (
        <RichText onChange={handleChange} value={value} />
    )
}
