/**
 * @name  AutoRegistryComponents
 * @description 按需加载，自动引入组件
 */
import AutoImport from 'unplugin-auto-import/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';

export const AutoRegistryComponents = () => {
  return [
    AutoImport({
      dts: 'types/auto-imports.d.ts',
      imports: [
        'vue',
        {
          'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar'],
        },
      ],
    }),
    Components({
      dts: 'types/components.d.ts',
      resolvers: [NaiveUiResolver()],
    }),
  ];
};
