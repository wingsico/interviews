# interviews
面试题库

1. window.onload与document.ready的区别

区别在于document.ready在文档框架加载好了之后就会运行，无需等到css，图片等资源加载完毕后再执行
而window.onload在所有资源加载完毕之后才会执行

2. iframe如何在页面中改变另一个iframe的样式

可以通过document.querySelector('.iframe').contentWindow.document.querySelector('.test').style.color = '#44ceff'

即通过iframe元素的contentWindow属性来完成

3. 尽可能多的方法隐藏一个元素

```
display: none;

visiblity: none;

opactiy: 0;

position: absolute;
left: -9999px;
top: -9999px;

clip-path: polygon(0 0);
```

4. 盒模型

盒模型包括 margin, border, padding, content

IE盒模型： 当确定了width和height的值时，无论如何改变border和padding和content都不会改变该盒的实际宽高（仍然是width,height设置的值）

标准盒模型： 设置的width和height的值仅仅是content的值，当改变border，padding时，都会时盒模型的实际宽高改变(实际宽 padding+border+content)

可以通过 box-sizing 来改变 设置为 border-box 即是 IE 盒模型， content-box 则是标准盒模型

5. 选择器优先级

行内 > 内联 >

6. 前端路由实现

分为hash和history模式

hash则是根据hashchange事件来对hash变化时做出相应，当触发hashchange事件后，根据当前hash值和之前定义的路由表的路径进行比对，将routerview所在的节点渲染成路由表对应的DOM(可以采用innerHTML), 由于页面加载的时候不会触发hashchange，所以再 `DOMContentLoaded` 时需要主动执行一次hashChange的回调函数

history则是根据popstate事件来对url地址的改变
