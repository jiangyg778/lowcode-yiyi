import MaterialContent from "./content-material";

const area = 'leftArea';
const LeftPlugin = () => {
    const skeleton = []
    skeleton.push({
        area,
        type: 'Widget',
        name: 'eventBindDialog',
        align: 'start',
        content: <MaterialContent />,
        props: {
            type: 'icon',
            value: 'set',
        },
    });

    // 注册变量绑定面板
    skeleton.push({
        area,
        type: 'Widget',
        name: 'variableBindDialog',
        align: 'end',
        props: {
            type: 'text',
            value: '测试',
        },
        content: 456
    });
    return skeleton
};

export default LeftPlugin();