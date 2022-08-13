/**
 * @name ConfigRestartPlugin
 * @description 监听配置文件自动重启vite
 */
import ViteRestart from 'vite-plugin-restart';

export const ConfigRestartPlugin = () => {
  return ViteRestart({
    restart: ['*.config.[jt]s', '**/config/*.[jt]s'],
  });
};
