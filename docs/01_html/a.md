1.利用vitepress搭建出博客的架子
2.对文章内容进行分栏分类

基础知识技能树

  - HTML
  - CSS
  - JS
  - React
  - Vue
  - Node
  - TS
  - 算法

前端进阶

  - 低代码
  - 微前端
  - 跨端
   - RN
   - Flutter
   - 小程序
  - 性能优化
  - 浏览器
  - 编译
  - 工程化

### 1.第一步 利用vitepress搭建出博客的架子

#### 1.1 创建和启动

```bash
mkdir laughsun-blog && cd laughsun-blog
pnpm init
pnpm add -D vitepress vue
mkdir docs && echo '# Hello VitePress' > docs/index.md # docs/index.md默认就是首页
```

``` json
{
  // ...
	"scripts": {
    "docs:dev": "vitepress dev docs --open",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
  }
  // ...
}
```

```bash
pnpm docs:dev
http://localhost:5173/
```

#### 1.2 配置主页和菜单内容

```bash
touch docs/.vitepress/config.ts
```
##### 1.2.1 修改首页docs/index.md

```md
---
layout: home

title: 网页的title
titleTemplate: 网页的title右边的文字

hero:
  name: 显示的大名字
  text: 显示的大内容
  tagline: 大内容下的一行字
  image:
    src: 这里塞一张右边的图片，可以放在public里面 /imgxxx
    alt: 
  actions:
    - theme: brand
      text: 开始学习
      link: /主页
    - theme: alt
      text: 我的GitHub
      link: 替换成github地址

features:
  - icon: 🔑
    title: xxx
    details: xxx.
  - icon: 💡
    title: xxx
    details: xxx.
  - icon: 📦
    title: xxx
    details: xxx.
  - icon: 🚀
    title: xxx
    details: xxx.
---


```

##### 1.2.2 基础配置

```tsx
import { defineConfig } from 'vitepress';

export default defineConfig({
    lang: 'zh-CN',
    title: 'LaughSun的前端之旅',
    description: '学习前端',
    themeConfig: {
        siteTitle: 'Hello World',
        logo: 'https://avatars.githubusercontent.com/u/30840073?v=4'
    }
})
```

##### 1.2.3 多菜单栏+多侧边栏

> 预期: 点击右边的菜单，左边会出现对应的文章侧边栏

``` tsx
export default defineConfig({
    themeConfig: {
        nav: [
            {
                text: '菜单1',
                link: '/menu1/a.md',
                activeMatch: '/menu1/',
            },
            {
                text: '菜单2',
                link: '/menu2/a.md',
                activeMatch: '/menu2/',
            },
            {
                text: '菜单3',
                link: '/menu3/a.md',
                activeMatch: '/menu3/',
            }
        ],
        sidebar: {
            '/menu1/': [
                {
                    text: '侧边章节1',
                    items: [
                        { text: 'a', link: '/menu1/a.md' },
                        { text: 'b', link: '/menu1/b.md' }
                    ],
                    collapsed: false
                }
            ],
            '/menu2/': [
                {
                    text: '侧边章节1',
                    items: [
                        { text: 'a', link: '/menu2/a.md' },
                        { text: 'b', link: '/menu2/b.md' }
                    ],
                    collapsed: false
                }
            ],
            '/menu3/': [
                {
                    text: '侧边章节1',
                    items: [
                        { text: 'a', link: '/menu3/a.md' },
                        { text: 'b', link: '/menu3/b.md' }
                    ],
                    collapsed: false
                }
            ],
        }
    }
})
```