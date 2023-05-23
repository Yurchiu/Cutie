# Simple PPT `by cieu`

这是一个以 markdown 为基础的，致力于更方便快捷地生成演示文档的工具。

特点：

- 无需传统的 Office 软件，只需一个浏览器（最好是非国产）；
- 只需输入一个 markdown 文档而稍加特定修改，就可以生成一个简洁的演示文档；
- 基于 HTML，可以方便地内嵌代码、引用网页等；
- 摆脱了繁琐的 PPT 排版工作，专注于内容；
- 支持 $\LaTeX$，可方便地进行公式书写；
- 全屏体验最佳。

如果你不需要将 PPT 部署至你的 Blog，下面的内容可以忽略了。

## Initialize

在你博客根目录的 `_config.yml` 文件中写入：

```yaml
skip_render:
  - 'ppt/**'
```

之后，将 `slide.zip` 解压至博客根目录的 `source` 文件夹中的 `ppt` 文件夹中，使 `readme` 文档直接位于 `ppt` 文件夹下。

在压缩包中，有更详细的 `readme` 文档。

## Use it

将生成的 `ppt.html` 文件置于 `ppt` 目录下，重命名，之后就可以在文章中引用了：`../ppt/yourpptname`。

具体地，有两种方式：

第一种，可以通过引用链接的方式。推荐（因为 `iframe` 太小了）。强烈建议全屏演示。使用键盘左右键或鼠标点击左下角或右下角翻页。更多功能，见文档。

第二种，你可以通过 `iframe` 展示你的 PPT。比较好的长宽比是 `608:350`。上面已经演示过了。为了调整显示字体的大小，需要加 `js` 代码：


```javascript
function change()
{
    var len=document.querySelector("#ppt1");
    var width=parseFloat(window.getComputedStyle(len, null).getPropertyValue('width'));
    len.style.height=width*0.5757+"px";
    
    window.frames['ppt1'].location.reload();
    var width_srceen = screen.width;
    var new_window_width = $(window.frames['ppt1']).width();
    var multiple =new_window_width/width_srceen;
    let block=window.frames['ppt1'].document.querySelectorAll(":not(.poser)");
    
	for (var i = 0; i < block.length; i++) {
		var style = parseFloat(window.getComputedStyle(block[i], null).getPropertyValue('font-size'));
	    var hi = style * multiple;
	    block[i].style.fontSize=hi+"px";
        
		style = parseFloat(window.getComputedStyle(block[i], null).getPropertyValue('padding'));
	    hi = style * multiple;
	    block[i].style.padding=hi+"px";
	}
}
```

## Note

如果要部署到你的 blog，一定要将生成的 `ppt.html` 文件编码改为 `UTF-8`。

若非，只要让其无乱码即可。

## Bug

使用国产浏览器或手机，体验不佳。原因是浏览器版本低。