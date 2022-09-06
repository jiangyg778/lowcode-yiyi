import MaterialContent from "./material";

const area = 'leftArea';
const LeftPlugin = () => {
    const skeleton = []
    skeleton.push({
        area,
        type: 'Widget',
        name: 'eventBindDialog',
        content: <MaterialContent />,
        props: {
            icon: 'set',
            align: 'top',
            description: '变量绑定1',
        },
    });

    // 注册变量绑定面板
    skeleton.push({
        area,
        type: 'Widget',
        name: 'variableBindDialog',
        props: {
            icon: 'atm',
            align: 'top',
            description: '变量绑定2',
        },
        content: 456
    });
    return skeleton
};

export default LeftPlugin();