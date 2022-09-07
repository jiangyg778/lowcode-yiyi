/**
 * 插件注册
 */
import LeftPlugin from './left-plugin';
import { pluginStore } from '../store';

const PluginRegister = () => {
    pluginStore.LeftPlugin = LeftPlugin;
}

export default PluginRegister;
