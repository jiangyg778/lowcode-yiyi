/**
 * 物料
 */
const inputMeta =
{
    group: 'Fed',
    componentName: 'YiInput',
    title: 'Input',
    style: {},
    props: {},
    screenshot: ' data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAAYCAYAAABEHYUrAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAO6ADAAQAAAABAAAAGAAAAACfDBzTAAABx0lEQVRYCe1YsUoDQRCd2Yua0sZKG8FWsPAXxMZeBIsIiUgS8A/EwspOSFIYQQtBUtiIjeQXFARbwcZAII1l5MyOM5vcpXDikZTLLoS9eTu7M29eqof1enMP0FwAwBL/slYPyB5XKqU7SWw2b1fin+9HIljn0GRc7iNQq1wuFpK8RuPqhgB3Oc4n2ITdIsLbXG5hp1Ta/5ScWfrOOaIEDQB6mVAohQnNJg4H48jGcf/MAnYNmFOiwSBNVD54IItgzHmtdr1VrR60ZSegbbL2kIl8KVdSCDGKLNkjqcdgwR1IH1P2LWqwotlEpQCSfR7mSyQLlw3gaxZRl8mEWNl3Y2hVYtklziIqufK+1JF6Eo/W1H1n/fWSh73YA1kvZFRIBGWVoXgBBWW9kFEhEZRVhuIFFJT1QkaFRFBWGYoXUFDWCxkVEkFZZSheQEFZL2RUSIiyPTHSlLM/0CivNz6gjgXaEENsjOlfYrixk7hmLX5IhuwSOyNOv5KiznDjOuxGdVJwhr5zYo06xxAx00plg8xZqUnBKJo/ARs/ENl74EcSXNvZWGMr1bYq1WJbzsVhZCv1CQxecvivlUo8GuOs1HwxfXuGvn8BAhKqhxytHSQAAAAASUVORK5CYII=',
    configure: {
        props: [
            {
                name: 'value',
                display: 'block',
                title: '内容',
                setter: {
                    componentName: 'StringSetter',
                    props: {
                        placeholder: '请输入内容',
                    },
                },
            },
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
