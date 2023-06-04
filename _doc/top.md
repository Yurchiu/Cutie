# 添加文章置顶

## 方法一

请在 `path-to-your-blog/node_modules/hexo-generator-index/lib/generator.js` 的合适位置添加如下代码：

```js
posts.data = posts.data.sort(function(a, b) {
      if(a.top && b.top) {
          if(a.top == b.top) return b.date - a.date;
          else return b.top - a.top;
      }
      else if(a.top && !b.top) {
          return -1;
      }
      else if(!a.top && b.top) {
          return 1;
      }
      else return b.date - a.date;
  });
```

如代码所示，“文章置顶” 原理是按照文章的 top 值排序，并加上 "置顶" 标签。

## 方法二

卸载系统自带的排序插件：

```swift
npm uninstall hexo-generator-index
```

添加替代插件：

```swift
npm install hexo-generator-index-pin-top --save
```

同样按照文章 top 值排序。