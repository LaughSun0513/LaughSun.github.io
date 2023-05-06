import { defineConfig } from 'vitepress';

export default defineConfig({
    base: '/LaughSun0513.github.io/',
    lang: 'zh-CN',
    title: 'LaughSun的前端之旅',
    description: 'LaughSun的前端之旅',
    themeConfig: {
        siteTitle: '不积跬步无以至千里',
        logo: 'https://avatars.githubusercontent.com/u/30840073?v=4',
        nav: [
            {
                text: '菜单1',
                link: '/01_html/a.md',
                activeMatch: '/01_html/',
            },
            {
                text: '菜单2',
                link: '/02_css/a.md',
                activeMatch: '/02_css/',
            },
            {
                text: '菜单3',
                link: '/03_js/a.md',
                activeMatch: '/03_js/',
            }
        ],
        sidebar: {
            '/01_html/': [
                {
                    text: '侧边章节1',
                    items: [
                        { text: 'a', link: '/01_html/a.md' },
                        { text: 'b', link: '/01_html/b.md' }
                    ],
                    collapsed: false
                }
            ],
            '/02_css/': [
                {
                    text: '侧边章节1',
                    items: [
                        { text: 'a', link: '/02_css/a.md' },
                        { text: 'b', link: '/02_css/b.md' }
                    ],
                    collapsed: false
                }
            ],
            '/03_js/': [
                {
                    text: '侧边章节1',
                    items: [
                        { text: 'a', link: '/03_js/a.md' },
                        { text: 'b', link: '/03_js/b.md' }
                    ],
                    collapsed: false
                }
            ],
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/LaughSun0513' }
        ],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2023-present LaughSun'
        }
    },
    
})