# front-matter

本主题增加了如下 front-matter：

- `discomments: true`——是否禁止评论。

- `bgimg: /path/to/your/pic.img`——设置文章卡片背景图片。

- `top: [number]`——设置文章排列优先级。注意，参看文档 `top.md` 来获取启用方式。

- `height: [string]`——如果设置了背景图片，可设定文章卡片高度（数字+单位）。默认 `30em`。

- `color: [string]`——设置文章卡片颜色。默认是 `#fff` 或 `$text-color`。

- `disfa: true`——禁用文章的 Font Awesome 图标·。

- `faname: [string]`——设置文章的 Font Awesome 图标。默认是 `fa-file-text-o`。

- `tocd: [number]`——设置目录深度。默认 3。

- `author: [list/array of string]`——设置作者（支持多作者）。默认为博客根目录中 `config_.yml` 中的内容。

注意：`bgimg` 和 `faname` 冲突。`bgimg` 优先。

# Note

1. Mathjax 公式渲染是全局开启的。
2. “RSS 地址”依赖 `hexo-generator-feed` 插件来运行。 请运行 `npm install hexo-generator-feed`。 
3. “wordcount”依赖 `hexo-wordcount` 插件来运行。 请运行 `npm i hexo-wordcount --save`。
4. “blog-encrypt”依赖 `hexo-blog-encrypt` 插件来运行。 请运行 `npm install --save hexo-blog-encrypt`。
5. “文章置顶” 原理是按照文章的 top 值排序，并加上 "置顶" 标签。
6. 推荐在文件 `path-to-your-blog/_config.yml` 中将 per_page 设置为 0。
7. 推荐安装插件： `hexo-neat` `hexo-generator-sitemap`。
8. 如果你想设置标签页或分类页，请设置这些页面的 type (type: tags/categories)。
9. 文章卡片指在首页显示的含文章摘要的文本框。
10. “Search”依赖 `hexo-generator-search`。请运行 `npm install hexo-generator-search --save`。其使用方法，参见 <https://github.com/wzpan/hexo-generator-search>。