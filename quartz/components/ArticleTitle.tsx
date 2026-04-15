import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const ArticleTitle: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const title = fileData.frontmatter?.title
  if (title) {
    const showGithubIcon = fileData.slug === "index"
    return (
      <h1 class={classNames(displayClass, "article-title")}>
        {title}
        {showGithubIcon && (
          <>
            <a
              class="github-inline"
              href="https://github.com/earfanfan/amu-blog"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="访问 GitHub 仓库"
              title="GitHub"
            >
              <svg viewBox="0 0 16 16" width="20" height="20" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.5-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.65 7.65 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"
                />
              </svg>
            </a>
            <a
              class="rss-inline"
              href="/amu-blog/index.xml"
              aria-label="RSS 订阅"
              title="RSS"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16" />
                <circle cx="5" cy="19" r="1" />
              </svg>
            </a>
          </>
        )}
      </h1>
    )
  } else {
    return null
  }
}

ArticleTitle.css = `
.article-title {
  margin: 2rem 0 0 0;
}

.github-inline {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.6rem;
  vertical-align: middle;
  color: inherit;
  opacity: 0.6;
  transition: all 0.2s ease;
  padding: 0.2rem;
  border-radius: 4px;
}

.rss-inline {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.6rem;
  vertical-align: middle;
  color: inherit;
  opacity: 0.6;
  transition: all 0.2s ease;
  padding: 0.2rem;
  border-radius: 4px;
}

.github-inline:hover,
.rss-inline:hover {
  color: var(--secondary);
  opacity: 1;
  background-color: var(--light);
}
`

export default (() => ArticleTitle) satisfies QuartzComponentConstructor
