<template>
  <div class="home">
    <div class="home-left">
      <div class="left-main-box">
        <n-avatar round :size="200" src="/src/assets/avatar.jpg" />
        <div class="blog-name">zBlog</div>
        <n-gradient-text size="20" gradient="linear-gradient(90deg, red 0%, green 50%, blue 100%)">
          Web Developer
        </n-gradient-text>
        <div class="self-intro">目前主做前端开发，以后回家养猪。心之所想，随之而动</div>
        <n-row>
          <n-col :span="12">
            <n-statistic label="POST" tabular-nums>
              <n-number-animation show-separator :from="0" :to="87654321" />
            </n-statistic>
          </n-col>
          <n-col :span="12">
            <n-statistic label="ARTICLE" tabular-nums>
              <n-number-animation :from="0" :to="618" />
            </n-statistic>
          </n-col>
        </n-row>
      </div>
    </div>
    <div class="home-main">
      <div class="home-main-box">
        <n-list v-for="(item, index) in articleList" :key="index" bordered>
          <template #header>
            <div class="item-title">
              <a href="/">{{ item.title }}</a>
            </div>
          </template>
          <template #footer>
            <n-button>Read more</n-button>
          </template>
          <n-list-item>
            <n-thing>
              <template #description>
                <div class="item-tag">
                  <span>{{ item.date }}</span>
                  <span>{{ item.type }}</span>
                  <span>阅读：{{ item.readNum }}</span>
                </div>
              </template>
              {{ item.description }}
            </n-thing>
          </n-list-item>
        </n-list>
      </div>
    </div>
    <div class="home-right">3</div>
  </div>
</template>

<script setup lang="ts">
export interface IArticle {
  title: string;
  date: string | number;
  type?: string;
  readNum: number;
  description: string;
}

const articleList: IArticle[] = [
  {
    title: 'Nuxt3从零到实战手把手 免费视频图文教程',
    date: '2022-08-01',
    readNum: 8943,
    type: '视频教程',
    description:
      'Nuxt3是Vue3全家桶的一员，让你能轻松实现SSR网页的制作。Nuxt3比Nuxt2新增加了12项最新的特性，包括可以完全使用Vue3的所有语法，并且对TypeScript的完美支持。目前Nuxt3还是Bate版本，但我相信今年就会出正式版，所以小伙伴们可以和我一起学起来。本套视频完全免费，还提供了辅导微信群，只要你肯学，一定可以学会。',
  },
  {
    title: '程序员应聘技巧 保姆级流程攻略',
    date: '2022-07-29',
    readNum: 14544,
    type: '程序软技能',
    description:
      '当我们走出校园，走向社会。我们都绕不开一个话题，就是应聘。程序员这个岗位是一个技术岗位，所以应聘是有一些技巧在里边的，这些技巧的使用可以大大提升应聘成功率。这个视频我们就讲一下这些技巧。',
  },
  {
    title: 'Pinia入门视频教程 全新一代状态管理工具Pinia  -Vue3全家桶系列',
    date: '2022-07-21',
    readNum: 15783,
    type: '视频教程',
    description: '这套免费视频我们有七节，每节课程10分钟左右，也就是说，你只要用一个小时左右时间就可以完全学会Pinia。',
  },
  {
    title: '我项目中用的20个轮子 开发效率提升200% 建议收藏',
    date: '2022-07-08',
    readNum: 23998,
    type: '程序软技能',
    description:
      '我是一个前端开发者，这个视频就推荐我工作中常用的20个轮子。这些轮子可以大大加快你的开发效率。如果你是后端，视频可能对你的帮助有限，但你也可以把视频分享给前端同事，帮助整个开发团队的成长。',
  },
];
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  width: 100%;

  .home-left {
    width: var(--zb-layout-left-width);
    height: fit-content;

    .left-main-box {
      padding: 10px;
      text-align: center;
      // box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      .blog-name {
        font-size: 20px;
      }

      .self-intro {
        color: var(--zb-c-text-0);
        line-height: 24px;
      }
    }
  }

  .home-main {
    flex: 1;
    margin: 0 10px;

    .home-main-box {
      margin-top: -14px;

      .item-title a {
        color: var(--zb-c-text-0);
        font-size: 22px;
      }

      .item-tag {
        display: flex;
        color: var(--zb-c-text-sub);

        > span {
          min-width: 150px;
        }
      }
    }
  }

  .home-right {
    width: var(--zb-layout-right-width);
    height: fit-content;
  }
}

.home-left,
.home-right {
  background-color: rgb(255, 255, 255);
}
</style>
