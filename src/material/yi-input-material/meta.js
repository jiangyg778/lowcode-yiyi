/**
 * 物料
 */
const inputMeta =
{
    group: 'Fed',
    componentName: 'YiInput',
    title: '输入框',
    style: {},
    props: {},
    configure: {
        props: [
            {
                name: 'width',
                display: 'block',
                title: '宽度',
                setter: {
                    componentName: 'StringSetter',
                    props: {
                        placeholder: 'Please enter a name for this component',
                    },
                },
            },
            {
                name: 'height',
                display: 'block',
                title: '高度',
                setter: {
                    componentName: 'StringSetter',
                    props: {
                        placeholder: 'Please enter a name for this component',
                    },
                },
            }
        ]
    }
}
export default inputMeta
