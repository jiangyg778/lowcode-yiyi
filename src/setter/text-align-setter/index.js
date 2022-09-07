import TextAlign from "../../components/TextAlign"

export default function TextAlignNewSetter({ onChange, value }) {
    const handleChange = (i) => {
        onChange(i)
    }
    return (
        <TextAlign onChange={handleChange} value={value} />
    )
}

