export function getOnlyKey() {
    return Math.random();
}

//补充px单位
export function addPx(name, num) {
    const WHITE = ['width', 'height']
    return WHITE.includes(name) ? num + 'px' : num;
}

// 计算样式属性
export function getRealityStyle(p) {
    //判断是否为对象万能方法
    if (!isObject(p)) {
        //抛出异常
        throw new Error('参数必须为对象');
    }
    let style = {}
    Object.keys(p).forEach((key) => {
        if (p[key]) {
            style[key] = addPx(key, p[key])
        }
    })
    return style
}

export function isObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
}


export const getCanvasPosition =
    (e) => {

        const endX = e.pageX;
        const endY = e.pageY;

        let dragCmp = e.dataTransfer.getData("drag-cmp");
        if (!dragCmp) {
            return;
        }
        dragCmp = JSON.parse(dragCmp);
        const { style } = dragCmp;

        const canvasDOMPos = {
            top: 130,
            left: document.body.clientWidth / 2 - 450,
        };

        const startX = canvasDOMPos.left;
        const startY = canvasDOMPos.top;

        let disX = endX - startX;
        let disY = endY - startY;

        style.left = disX - dragCmp.style.width / 2;
        style.top = disY - dragCmp.style.height / 2;

        return dragCmp;
    }

