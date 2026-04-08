import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "阿木",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "zh-CN",
    baseUrl: "hushway.github.io/amu-blog/",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#FFFBF0", // 网页背景：香草冰淇淋般的暖米白
          lightgray: "#F0E7D8", // 边框/代码块背景：柔和的浅燕麦色
          gray: "#D2C4B3", // 图谱连线/粗边框：暖卡其色
          darkgray: "#5C4A3D", // 正文文字：深咖啡色（比纯黑色阅读更舒适、温和）
          dark: "#3A2E26", // 标题与图标：特浓黑咖啡色
          secondary: "#D48253", // 链接/图谱当前节点：温暖的焦糖色
          tertiary: "#E6A886", // 鼠标悬浮时的浅焦糖色
          highlight: "rgba(212, 130, 83, 0.15)", // 内部链接的浅色背景框
          textHighlight: "#FFDF7388", // Markdown高亮语法 (==文本==) 的荧光黄
        },
        darkMode: {
          light: "#2C2623", // 暗黑模式背景：深焙咖啡色（不刺眼的暖暗色）
          lightgray: "#453B36",
          gray: "#73645C",
          darkgray: "#D6CACA", // 暗黑模式下的正文：暖灰白色
          dark: "#F7F2F0", // 暗黑模式下的标题：亮暖白色
          secondary: "#E8A382", // 暗黑模式链接：柔和的桃木/焦糖色
          tertiary: "#D48253",
          highlight: "rgba(232, 163, 130, 0.15)",
          textHighlight: "#D4825388",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
