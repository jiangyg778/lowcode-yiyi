import { proxy } from 'valtio'


export const canvasStore = proxy({
    // 页面样式
    style: {
        // width: 320,
        // height: 568,
        // backgroundColor: "#ffffff",
        // backgroundImage: "",
        // backgroundPosition: "center",
        // backgroundSize: "cover",
        // backgroundRepeat: "no-repeat",
    },
    // 组件 compoents
    components: [],
    // 当前选中组件的序号
    currentIndex: 0,
    currentSetterProps: {}
})

// const schema = {
//     componentName: 'Page',
//     css: '',
//     props: {
//         children: '',//内容
//         style: {},//样式
//     },
//     children: []
// }