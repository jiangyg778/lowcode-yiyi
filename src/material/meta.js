/**
 * 物料
 */
export const meta = [
    {
        group: 'Fed',
        componentName: 'YiInput',
        title: '输入框',
        style: {},
        props: {},
        configure: {
            props: [
                {
                    name: 'name',
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
                    name: 'demo',
                    display: 'block',
                    title: '宽度2',
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
]