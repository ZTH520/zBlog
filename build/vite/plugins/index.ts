import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { PluginOption } from 'vite';
import { ConfigRestartPlugin } from './restart';
import { ConfigEslintPlugin } from './eslint';
import { AutoRegistryComponents } from './component';

export function createVitePlugins(isBuild: Boolean) {
  const vitePlugins: (PluginOption | PluginOption[])[] = [vue(), vueJsx()];

  vitePlugins.push(ConfigRestartPlugin());
  vitePlugins.push(ConfigEslintPlugin());
  vitePlugins.push(...AutoRegistryComponents());

  return vitePlugins;
}
