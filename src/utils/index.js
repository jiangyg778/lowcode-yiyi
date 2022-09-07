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