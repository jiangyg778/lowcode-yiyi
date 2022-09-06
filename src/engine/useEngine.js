import { canvasStore } from '../store';
import { getOnlyKey } from '../utils';


const useEngine = () => {
    //增加组件
    const addCmp = (_cmp) => {
        const cmp = { ..._cmp, key: getOnlyKey() };
        canvasStore.components.push(cmp);
        setSelectedCmpIndex(canvasStore.components.length - 1)
    }
    //删除组件
    const deleteCmp = () => { }

    // 设置当前选中的组件
    const setSelectedCmpIndex = (index) => {
        canvasStore.currentIndex = index
    };


    return { addCmp, deleteCmp, setSelectedCmpIndex }


}

export default useEngine;
