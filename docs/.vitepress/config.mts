import { defineConfig } from "vitepress";
import 'dotenv/config'
import { navList } from "./navList";


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SKY",
  base: '/dom',
  description: "技术文档",
  // 打包目录
  outDir: "../dist",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // 语言
    langMenuLabel: "zh-CN",
    // 导航栏最左侧的大标题
    siteTitle: "SKY",
    // 添加搜索框
    // 下面的三个参数直接赋值即可，都是官方基于的固定值
    algolia: {
      appId: "R2IYF7ETH7",
      apiKey: "599cec31baffa4868cae4e79f180729b",
      indexName: "index",
    },
    nav: navList,
    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],
    i18nRouting: true,

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],

    // 定义文章底部按钮对应的文本标题
    docFooter: {
      prev: "上一篇文章",
      next: "下一篇文章",
    },
    
    // returnToTopLabel: "返回顶部",
    lastUpdatedText: "最后更新", // string

    // 底部栏定义的内容
    footer: {
      message: "本网站由SKY提供支持",
      copyright: "Copyright © 2024-SKY",
    },
  },
});
