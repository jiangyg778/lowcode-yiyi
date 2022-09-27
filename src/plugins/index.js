/**
 * 插件注册
 */
import LeftPlugin from './left-plugin';
import headerPlugin from './header-plugin';
import { pluginStore } from '../store';

const pluginRegister = () => {
    pluginStore.LeftPlugin = LeftPlugin;
    pluginStore.headerPlugin = headerPlugin;
}

export default pluginRegister;
