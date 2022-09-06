import React from 'react'
import { Input } from '@alifd/next';

export default function StringSetter(props) {
  const { placeholder } = props
  return (
    <div>
      <Input placeholder={placeholder} />
    </div>
  )
}
