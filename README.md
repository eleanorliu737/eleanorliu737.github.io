# 🌱 Eleanor's Personal Site

A hand-built personal website: life journey, works & ideas, writing, and a public library of great reads. Built with [Astro](https://astro.build) — no database, no CMS, everything is Markdown and tiny data files.

> 手工搭建的个人网站：人生轨迹、作品与想法、文章写作、公开收藏馆。基于 Astro，没有数据库、没有后台，所有内容都是 Markdown 和小数据文件。

## Structure · 网站结构

| Page | Path | Content lives in |
| --- | --- | --- |
| 首页 Home | `/` | `src/pages/index.astro` |
| 轨迹 Journey | `/journey/` | `src/data/journey.ts` |
| 作品 Works | `/works/` | `src/data/projects.ts` |
| 文章 Writing | `/writing/` | `src/content/posts/*.md` |
| 收藏 Library | `/library/` | `src/data/bookmarks.ts` |
| 关于 About | `/about/` | `src/pages/about.astro` |

## How to update content · 如何更新内容

**Write a new article** — create a new `.md` file in `src/content/posts/`:

> **发表新文章** —— 在 `src/content/posts/` 里新建一个 `.md` 文件，开头照抄下面的格式，然后用 Markdown 正常写正文即可：

```markdown
---
title: 文章标题
date: 2026-08-01
lang: zh          # zh 或 en
summary: 一句话摘要，会显示在列表里。
tags: [标签1, 标签2]
---

正文从这里开始……
```

**Save a bookmark** — add one entry to a folder's `items` in `src/data/bookmarks.ts`. To create a new folder, copy an existing folder object and edit it.

> **收藏一篇文章** —— 打开 `src/data/bookmarks.ts`，往对应收藏夹的 `items` 里加一条 `{ title, url, source, note }`。想新建收藏夹，复制一个 folder 对象改改就行。

**Edit your journey / projects** — plain text in `src/data/journey.ts` and `src/data/projects.ts`.

> **修改轨迹 / 作品** —— 直接改 `src/data/journey.ts` 和 `src/data/projects.ts` 里的文字。

## Development · 本地开发

```bash
npm install      # first time only · 仅第一次需要
npm run dev      # local preview at http://localhost:4321
npm run build    # production build → dist/
```

## Deployment · 部署上线

The site is fully static — deploy `dist/` anywhere. Recommended free options: GitHub Pages, Cloudflare Pages, or Vercel. A custom domain can be attached later without changing any content.

> 本站是纯静态网站，构建产物在 `dist/`，可免费部署到 GitHub Pages、Cloudflare Pages 或 Vercel。以后想要自己的域名，买一个绑定上去即可，内容一行都不用改。
