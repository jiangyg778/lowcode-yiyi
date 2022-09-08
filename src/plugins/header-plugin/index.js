import { Button, Box } from '@alifd/next';
const area = 'headerArea';
const headerPlugin = () => {
    const skeleton = []
    skeleton.push({
        area,
        name: 'eventBindDialog', //弹窗类型
        align: 'start',//位置
        content: '123', //弹窗内容
        props: {
            type: 'image',
            value: 'data:image/png;base64,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',
        },
    });

    // 注册变量绑定面板
    skeleton.push({
        area,
        name: 'variableBindDialog',
        align: 'end',
        props: {
            type: 'button',
            value: 'save & close',
            attrs: {
                type: 'primary',
            }
        },
        content: <Button>变量绑定</Button>,
    });
    return skeleton
};

export default headerPlugin();