import { UserConfig, ConfigEnv } from 'vite';
import { resolve } from 'path';
import { createVitePlugins } from './build/vite/plugins';
import { VITE_PORT } from './build/constant';

export default ({ command }: ConfigEnv): UserConfig => {
  const isBuild = command === 'build';
  return {
    resolve: {
      alias: [
        {
          find: '@',
          replacement: resolve(__dirname, 'src'),
        },
      ],
    },
    server: {
      open: true,
      host: true,
      port: VITE_PORT,
    },
    plugins: createVitePlugins(isBuild),
  };
};
