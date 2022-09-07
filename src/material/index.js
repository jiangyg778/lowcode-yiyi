//input
import inputMeta from './yi-input-material/meta';
import YiInput from './yi-input-material/index';

//button
import buttonMeta from './yi-button-material/meta';
import YiButton from './yi-button-material/index';


//导出物料配置信息
export const meta = [inputMeta, buttonMeta,]
//导出物料组件
export const dynamicCmp = { YiInput, YiButton, } 