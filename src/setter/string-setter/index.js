import { Input } from '@alifd/next';
import styles from "./index.less";

export default function StringSetter(props) {
  const { props: { placeholder }, value, onChange } = props

  const handleChange = (value) => {
    onChange(value)
  }

  return (
    <div className={styles.main}>
      <Input placeholder={placeholder} onChange={handleChange} value={value} style={{ width: 260 }} />
    </div>
  )
}
