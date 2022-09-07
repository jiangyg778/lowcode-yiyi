import { Input } from '@alifd/next';

export default function StringSetter(props) {
  const { props: { placeholder }, value, onChange } = props

  const handleChange = (value) => {
    onChange(value)
  }

  return (
    <div>
      <Input placeholder={placeholder} onChange={handleChange} value={value} />
    </div>
  )
}
