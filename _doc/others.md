# 404 page

在博客配置文件写入：

```yaml
skip_render:
  - '404.html'
```

之后，把本文件夹下的 `404.html` 置入博客 `source` 文件夹下（不是主题的 `source` 文件夹）。

或者，创建新 page 作为 404 页面。在 front-matter 写入 `permalink: /404.html`。

# Search

本主题支持两种搜索方式：站内搜索和站外搜索。

- 站内搜索：新建一个 page，在 front-matter 加上 `layout: search`。前提是参见文档 `fmatter.md`。
- 站外搜索：不需要额外设置。前提是你的博客被搜索引擎（默认使用 bing，可以自行修改代码）收录。

# Notes

1. Mathjax 公式渲染是全局开启的。
2. 推荐在文件 `path-to-your-blog/_config.yml` 中将 per_page 设置为 0。
3. 设置标签页或分类页的方法是：在 front-matter 加上 `type: tags/categories`。
4. 文章卡片指在首页显示的含文章摘要的文本框。
5. 主题 `js` 文件夹中，凡是不在 `core` 文件夹下的文件均是可删除的。