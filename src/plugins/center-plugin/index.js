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
            icon: 'set',
            description: '变量绑定1',
        },
    });

    // 注册变量绑定面板
    skeleton.push({
        area,
        type: 'Widget',
        name: 'variableBindDialog',
        align: 'end',
        props: {
            icon: 'atm',
            description: '变量绑定2',
        },
        content: 456
    });
    return skeleton
};

export default LeftPlugin();