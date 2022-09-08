/**
 * 插件注册
 */
import LeftPlugin from './left-plugin';
import { pluginStore } from '../store';
import headerPlugin from './header-plugin';

const PluginRegister = () => {
    pluginStore.LeftPlugin = LeftPlugin;
    pluginStore.headerPlugin = headerPlugin;
}

export default PluginRegister;
