import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";

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


function createNav() { 
    return [
        {
            text: "前端基础知识",
            activeMatch: "/01_basic/",
            items: [
                {
                    text: "HTML基础",
                    link: "/01_basic/01_html/"
                },
                {
                    text: "CSS基础",
                    link: "/01_basic/02_css/"
                },
                {
                    text: "JS基础",
                    link: "/01_basic/03_js/"
                },
            ],
        },
    ]
}


function createSiderBar() {
    return {
        "/01_basic/01_html/": [
            {
                text: "HTML",
                items: [
                    { text: "a", link: "/01_basic/01_html/a.md" },
                    { text: "b", link: "/01_basic/01_html/b.md" },
                ],
                collapsed: false,
            },
        ],
        "/01_basic/02_css/": [
            {
                text: "CSS",
                items: [
                    { text: "a", link: "/01_basic/02_css/a.md" },
                    { text: "b", link: "/01_basic/02_css/b.md" },
                ],
                collapsed: false,
            },
        ],
        "/01_basic/03_js/": [
            {
                text: "JS",
                items: [
                    { text: "a", link: "/01_basic/03_js/a.md" },
                    { text: "b", link: "/01_basic/03_js/b.md" },
                ],
                collapsed: false,
            },
        ],
    }
}

export default config;