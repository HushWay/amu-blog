import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.Comments({
      provider: 'giscus',
      options: {
        repo: 'earfanfan/blog',
        repoId: 'R_kgDOQ8xrjA',
        category: 'Announcements',
        categoryId: 'DIC_kwDOQ8xrjM4C1JYZ',
        mapping: 'title',
        strict: false,
        reactionsEnabled: true,
        inputPosition: 'top',
      }
    }),
  ],
  footer: Component.Footer({
    links: {
      // GitHub: "https://github.com/jackyzha0/quartz",
      // "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta({ showReadingTime: false }),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        // { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer({
      title: "记忆碎片",
      folderDefaultState: "collapsed",
      folderClickBehavior: "link",
      useSavedState: false,
    }),
  ],
  right: [
    Component.ConditionalRender({
      component: Component.RecentNotes({
        title: "最近更新",
        limit: 12,
        showTags: false,
        sort: (f1, f2) => {
          const modified1 = f1.dates?.modified?.getTime() ?? 0
          const modified2 = f2.dates?.modified?.getTime() ?? 0
          if (modified1 !== modified2) {
            return modified2 - modified1
          }
          const title1 = f1.frontmatter?.title?.toLowerCase() ?? ""
          const title2 = f2.frontmatter?.title?.toLowerCase() ?? ""
          return title1.localeCompare(title2)
        },
        filter: (f) => {
          const slug = f.slug
          if (!slug) return false
          return slug !== "index" && !slug.startsWith("tags/")
        },
      }),
      condition: (props) => props.fileData.slug === "index",
    }),
    Component.ConditionalRender({
      component: Component.TableOfContents(),
      condition: (props) => props.fileData.slug !== "index",
    }),
    // Component.Graph(),
    // Component.DesktopOnly(Component.TableOfContents()),
    // Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta({ showReadingTime: false })],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [],
}
