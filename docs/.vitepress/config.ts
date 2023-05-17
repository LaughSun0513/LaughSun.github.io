import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";

const _basic = [
    { text: "HTML基础", link: "/1_basic/1_html/" },
    { text: "CSS基础", link: "/1_basic/2_css/" },
    { text: "JS基础", link: "/1_basic/3_js/" },
    { text: "HTTPS网络相关", link: "/1_basic/4_网络相关/" },
    { text: "浏览器", link: "/1_basic/5_浏览器/" },
]
const _html = [
    { text: "八股文", link: "/1_basic/1_html/八股文.md" },
    { text: "b", link: "/1_basic/1_html/b.md" },
]
const _css = [
    { text: "a", link: "/1_basic/2_css/a.md" },
    { text: "b", link: "/1_basic/2_css/b.md" },
]
const _js = [
    { text: "a", link: "/1_basic/3_js/a.md" },
    { text: "b", link: "/1_basic/3_js/b.md" },
]

const createNav = () => [
    {
        text: "前端基础知识",
        activeMatch: "/1_basic/",
        items: _basic
    },
]

const createSiderBar = () => ({
    "/1_basic/1_html/": [
        {
            text: "学好HTML",
            items: _html,
            collapsed: false,
        },
    ],
    "/1_basic/02_css/": [
        {
            text: "学好CSS",
            items: _css,
            collapsed: false,
        },
    ],
    "/1_basic/03_js/": [
        {
            text: "学好JS",
            items: _js,
            collapsed: false,
        },
    ],
});

const config = withMermaid(
	defineConfig({
		base: "/fe-blogs/",
		lang: "zh-CN",
		title: "LaughSun的前端之旅",
		description: "LaughSun的前端之旅",
		themeConfig: {
			siteTitle: "不积跬步无以至千里",
			logo: "https://avatars.githubusercontent.com/u/30840073?v=4",
			nav: createNav(),
			sidebar: createSiderBar(),
			outline: "deep",
			socialLinks: [{ icon: "github", link: "https://github.com/LaughSun0513" }],
			footer: {
				message: "Released under the MIT License.",
				copyright: "Copyright © 2023-present LaughSun",
			},
		},
	})
);

export default config;