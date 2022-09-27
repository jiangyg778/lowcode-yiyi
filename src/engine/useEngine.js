import { canvasStore } from '../store';
import { getOnlyKey } from '../utils';


const useEngine = () => {
    //增加组件
    const addCmp = (_cmp) => {
        const cmp = { ..._cmp, key: getOnlyKey() };
        canvasStore.components.push(cmp);
        setSelectedCmpIndex(cmp.key)
    }

    //组件排序
    const updateCmpOrder = (startIndex, endIndex) => {
        let components = JSON.parse(JSON.stringify(canvasStore.components))
        const [removed] = components.splice(startIndex, 1);
        components.splice(endIndex, 0, removed);
        canvasStore.components = components
        setSelectedCmpIndex(endIndex)
    }

    //更新选中组件
    const updateSelectedCmp = (newStyle, newValue) => {
        const { components, currentIndex, currentSetterProps } = canvasStore;
        const selectedCmp = getSelectedCmp()
        let target = components.find(i => i.key === currentIndex)
        // 更新样式
        if (newStyle) {
            target.style = {
                ...selectedCmp?.style || {},
                ...newStyle,
            };
        }
        // 更新值
        if (newValue !== undefined) {
            target.value = newValue;
        }
        canvasStore.currentSetterProps = { ...currentSetterProps, ...newStyle }
    };

    //获取当前选中的组件
    const getSelectedCmp = () => {
        const { components, currentIndex } = canvasStore;
        return components.find(i => i.key === currentIndex)
    }

    //删除组件
    const deleteCmp = () => { }

    // 设置当前选中的组件index
    const setSelectedCmpIndex = (index) => {
        canvasStore.currentIndex = index
    };


    return { addCmp, deleteCmp, setSelectedCmpIndex, updateCmpOrder, updateSelectedCmp, getSelectedCmp }


}

export default useEngine;
