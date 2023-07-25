import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';

// 读取docs/下的所有目录
// 排除index.md和.vitepress
// 所有目录按照层级结构生成link路径

const _basic = [
    { text: "HTML基础", link: "/articles/1_basic/1_html/" },
    { text: "CSS基础", link: "/articles/1_basic/2_css/" },
    { text: "JS基础", link: "/articles/1_basic/3_js/" },
    { text: "HTTPS网络相关", link: "/articles/1_basic/4_网络相关/" },
    { text: "浏览器", link: "/articles/1_basic/5_浏览器/" },
]
const _html = [
    { text: "HTML八股文", link: "/articles/1_basic/1_html/HTML八股文.md" },
    { text: "b", link: "/articles/1_basic/1_html/b.md" },
]
const _css = [
    { text: "a", link: "/articles/1_basic/2_css/CSS布局之双飞翼布局.md" },
    { text: "b", link: "/articles/1_basic/2_css/CSS画形状之画三角形.md" },
]
const _js = [
    { text: "a", link: "/articles/1_basic/3_js/a.md" },
    { text: "b", link: "/articles/1_basic/3_js/b.md" },
]

const createTopNavBar = () => [
    {
        text: "前端基础知识",
        activeMatch: "/articles/1_basic/",
        items: _basic
    },
]

console.log(createTopNavBar());

const createSiderBar = () => ({
    "/articles/1_basic/1_html/": [
        {
            text: "学好HTML",
            items: _html,
            collapsed: false,
        },
    ],
    "/articles/1_basic/02_css/": [
        {
            text: "学好CSS",
            items: _css,
            collapsed: false,
        },
    ],
    "/articles/1_basic/03_js/": [
        {
            text: "学好JS",
            items: _js,
            collapsed: false,
        },
    ],
});

console.log(createSiderBar());

const config = withMermaid(
	defineConfig({
		base: "/fe-blogs/",
		lang: "zh-CN",
		title: "LaughSun的前端之旅",
		description: "LaughSun的前端之旅",
		themeConfig: {
			siteTitle: "不积跬步无以至千里",
			logo: "https://avatars.githubusercontent.com/u/30840073?v=4",
			nav: createTopNavBar(),
			// sidebar: createSiderBar(),
			outline: "deep",
			socialLinks: [{ icon: "github", link: "https://github.com/LaughSun0513" }],
			footer: {
				message: "Released under the MIT License.",
				copyright: "Copyright © 2023-present LaughSun",
			},
        },
        vite: {
            plugins: [
                AutoSidebar()
            ]
        }
	})
);

export default config;