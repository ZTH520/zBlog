<template>
  <header class="navbar">
    <div class="navbar-warp has-sidebar">
      <div class="container">
        <div class="navbar-title has-sidebar">
          <a class="title" href="/">zBlog</a>
        </div>
        <div class="navbar-content">
          <div class="navbar-search">
            <n-input placeholder="搜索" size="large" style="width: 150px">
              <template #prefix>
                <n-icon :component="SearchOutlined" />
              </template>
            </n-input>
          </div>
          <div class="nav">
            <n-menu
              v-model:value="activeKey"
              mode="horizontal"
              :options="menuOption"
              @update:value="handleUpdateValue"
            />
          </div>
          <div class="navbar-links">
            <a class="link" href="">
              <n-icon size="20"><yuque-filled /></n-icon>
            </a>
            <a class="link" href="">
              <n-icon size="20"><weibo-circle-filled /></n-icon>
            </a>
            <a class="link" href="">
              <n-icon size="20"><wechat-filled /></n-icon>
            </a>
            <a class="link" href="">
              <n-icon size="20"><github-filled /></n-icon>
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import {
  BookFilled,
  BulbFilled,
  GithubFilled,
  HomeFilled,
  SearchOutlined,
  ToolFilled,
  WechatFilled,
  WeiboCircleFilled,
  YuqueFilled,
} from '@vicons/antd';
import type { MenuOption } from 'naive-ui';
import { NIcon } from 'naive-ui';
import { Component, h, ref, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const renderIcon = (icon: Component) => {
  return () => h(NIcon, null, { default: () => h(icon) });
};

const route = useRoute();
const router = useRouter();
const activeKey = ref<string | null>(null);

const menuOption: MenuOption[] = [
  {
    label: '首页',
    key: '/',
    icon: renderIcon(HomeFilled),
  },
  {
    label: '教程',
    key: '/course',
    icon: renderIcon(BookFilled),
  },
  {
    label: '学习',
    key: '/study',
    icon: renderIcon(BulbFilled),
  },
  {
    label: '技能',
    key: '/skill',
    icon: renderIcon(ToolFilled),
  },
];

const handleUpdateValue = (key: string): void => {
  router.push(key);
};

watchEffect(() => {
  const { path } = route;
  activeKey.value = path;
});
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--zb-navbar-z-index);
  width: 100%;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);

  .navbar-warp {
    height: 72px;
    padding: 0 32px;

    &.has-sidebar {
      .navbar-content {
        margin-right: -32px;
        padding-right: 32px;
      }
    }
  }

  .container {
    display: flex;
    justify-content: space-between;
    max-width: calc(var(--zb-layout-max-width) - 64px);
    margin: 0 auto;
  }

  .navbar-title {
    &.has-sidebar {
      width: calc(var(--zb-sidebar-width) - 64px);
      margin-right: 32px;
    }

    .title {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      height: var(--zb-nav-height-desktop);
      color: var(--zb-c-text-1);
      font-weight: 600;
      font-size: 16px;

      &:hover {
        opacity: 0.6;
      }
    }
  }

  .navbar-content {
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: flex-end;
  }

  .navbar-search {
    flex-grow: 1;
  }

  .navbar-links {
    display: flex;

    .link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      color: var(--zb-c-text-2);
      transition: color 0.5s;

      &:hover {
        color: var(--zb-c-text-1);
      }
    }
  }
}
</style>
