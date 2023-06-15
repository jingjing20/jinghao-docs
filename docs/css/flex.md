# flex 布局

-   图片挂了 [flex](https://juejin.im/post/5e7ebdc06fb9a03c7c4c0a7b) ——掘金文章地址，方便阅读。

## 一、flex 容器基础概念


-   flex-container —— flex 容器
-   flex-item —— 子元素
-   水平方向上有一条轴线（主轴） —— main axis
-   垂直方向上有一条轴线（十字轴） —— cross axis

---

```!
先准备一下初始化代码， 只有三个文件。
```

1、`index.html`

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="stylesheet" href="basic.css" />
		<link rel="stylesheet" href="style.css" />
		<title>flex</title>
	</head>
	<body>
		<div class="container">
			<div class="item item-1"><span> 1 </span></div>
			<div class="item item-2"><span> 2 </span></div>
			<div class="item item-3"><span> 3 </span></div>
			<div class="item item-4"><span> 4 </span></div>
			<div class="item item-5"><span> 5 </span></div>
		</div>
	</body>
</html>
```

2、`basic.css`

```css
body {
	padding: 0;
	margin: 0;
}
.container {
	background: #42b983;
	padding: 10px;
}

.item {
	box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
	background: #ffffff;
	color: #cccccc;
	padding: 30px;
	display: block;
	text-align: center;
}

.item span {
	font-size: 50px;
}
```

3、`style.css`

-   <font color="red">这是用来改变一些属性来改变页面显示效果的样式文件,后面修改的样式都是在此文件中修改的 </font>

```!
页面初始效果如下图
```

![](https://user-gold-cdn.xitu.io/2020/3/28/1711f3c6b19ff1e0?w=1916&h=901&f=png&s=40912)

```!
接下来我们在 style.css 中改变一些属性来学习flex布局。
```

## 二、flex相关属性

### flex 布局（将对象作为弹性伸缩盒显示）

```css
.container {
	display: flex;
}
```

![](https://user-gold-cdn.xitu.io/2020/3/28/1711f4f9bc4f739a?w=1033&h=840&f=png&s=24984)

### inline-flex 布局（将对象作为内联弹性伸缩盒显示）

```css
.container {
	display: inline-flex;
}
```

![](https://user-gold-cdn.xitu.io/2020/3/28/1711f51a46c04276?w=1029&h=827&f=png&s=24020)

### flex-direction （子元素的排列方向）

-   默认是水平方向（flex-direction: row）

```css
.container {
	display: flex;
	flex-direction: column;
}
```

![](https://user-gold-cdn.xitu.io/2020/3/28/1711f59f938d6d0a?w=1041&h=838&f=png&s=27947)

### flex-wrap （是否要换行显示）

> 我们先添加一些子元素，便于效果展示

-   默认是不换行（flex-wrap: nowrap）

![](https://user-gold-cdn.xitu.io/2020/3/28/1711f5e11ec742d9?w=1918&h=582&f=png&s=38666)

```css
.container {
	display: flex;
	flex-wrap: wrap;
}
```

![](https://user-gold-cdn.xitu.io/2020/3/28/1711f62733125bc4?w=1746&h=720&f=gif&s=715230)

### flex-flow（同时控制 flex-direction 和 flex-wrap）

```css
.container {
	display: flex;
	flex-flow: row-reverse wrap;
}
```

```!
row-reverse 即水平反方向 还有column-reverse垂直反方向、wrap-reverse（反向换行）
```

![](https://user-gold-cdn.xitu.io/2020/3/28/1711f67dee0c7262?w=1166&h=624&f=png&s=32915)

### justify-content（子元素主轴方向间隔）

-   默认是（justify-content: flex-start）

```css
.container {
	display: flex;
	justify-content: flex-end;
}
```

![](https://user-gold-cdn.xitu.io/2020/3/28/1711f6eebfa453b3?w=1163&h=561&f=png&s=20933)

```css
.container {
	display: flex;
	justify-content: center;
}
```

![](https://user-gold-cdn.xitu.io/2020/3/28/1711f739568bf170?w=1163&h=708&f=png&s=26072)

```css
.container {
	display: flex;
	justify-content: space-between;
}
```

![](https://user-gold-cdn.xitu.io/2020/3/28/1711f758c5b2b281?w=811&h=461&f=png&s=15776)

```css
.container {
	display: flex;
	justify-content: space-around;
}
```

![](https://user-gold-cdn.xitu.io/2020/3/28/1711f760f3b4f3cf?w=811&h=521&f=png&s=16684)

```!
space-around 和 space-between 的区别就是 space-between 只会在子元素之间添加间隔，space-around 会把父容器边界也视为子元素添加间隔
```

### align-items（子元素侧轴方向对齐方式）

-   现在我们把容器的高度设置一下

```css
.container {
	display: flex;
	justify-content: space-around;
	height: 300px;
}
```

-   默认是（align-items: stretch）拉伸
    ![](https://user-gold-cdn.xitu.io/2020/3/28/1711fbb16b004c23?w=1108&h=799&f=png&s=31805)

-   flex-start（容器顶部）

```css
.container {
	display: flex;
	justify-content: space-around;
	height: 300px;
	align-items: flex-start;
}
```

![](https://user-gold-cdn.xitu.io/2020/3/28/1711fd2d68319227?w=1110&h=652&f=png&s=25025)

-   flex-center（居中）

```css
.container {
	display: flex;
	justify-content: space-around;
	height: 300px;
	align-items: center;
}
```

![](https://user-gold-cdn.xitu.io/2020/3/28/1711fd568d83f2b3?w=1107&h=727&f=png&s=26572)

-   flex-end（容器底部）

```css
.container {
	display: flex;
	justify-content: space-around;
	height: 300px;
	align-items: flex-end;
}
```

![](https://user-gold-cdn.xitu.io/2020/3/28/1711fd36761e110b?w=1110&h=679&f=png&s=25854)

-   baseline（以子元素里面的内容作为基准线水平对齐）

```css
.container {
	display: flex;
	justify-content: space-around;
	height: 300px;
	align-items: baseline;
}

.item-1 {
	padding-top: 60px;
}
.item-2 {
	padding-top: 99px;
}
```

![](https://user-gold-cdn.xitu.io/2020/3/28/1711fe7a53003492?w=1108&h=668&f=png&s=26358)

### align-content （子元素侧轴方向对齐方式）

-   所有属性如下：（默认值为 stretch）

```css
align-content: stretch|center|flex-start |flex-end|space-between|space-around;
```

```css
.container {
	display: flex;
	flex-wrap: wrap;
	height: 300px;
}
```

-   以上属性效果图依次如下：

![](https://user-gold-cdn.xitu.io/2020/3/28/171200a8f47852f6?w=932&h=808&f=png&s=33273)

![](https://user-gold-cdn.xitu.io/2020/3/28/171200afe568c4a2?w=930&h=815&f=png&s=30477)

![](https://user-gold-cdn.xitu.io/2020/3/28/171200b6e21c6e57?w=931&h=749&f=png&s=29205)

![](https://user-gold-cdn.xitu.io/2020/3/28/171200c0414c6a22?w=931&h=825&f=png&s=30816)

![](https://user-gold-cdn.xitu.io/2020/3/28/171200c730bc1147?w=930&h=820&f=png&s=30736)

![](https://user-gold-cdn.xitu.io/2020/3/28/171200ccb8ecbdf5?w=930&h=797&f=png&s=30336)

### flex-item（子元素属性）

### order（改变子元素的排列顺序）

-   默认所有元素 order 属性值为 0，所以我们可以设置子元素的 order 属性来控制他们的顺序。

```css
.container {
	display: flex;
	height: 500px;
	justify-content: space-around;
	align-items: flex-start;
}

.item-1 {
	order: 1;
}
.item-6 {
	order: -1;
}
```

-   如图，6 到了最前面，1 到了最后面
    ![](https://user-gold-cdn.xitu.io/2020/3/28/1712016f5fa23b57?w=933&h=582&f=png&s=22095)

### flex（flex-grow，flex-shrink 和 flex-basis 的缩写）

-   默认是：flex: 0 1 auto
-   关于这个属性我看到一篇文章讲的通俗易懂，奉上如下：
-   [CSS flex 属性深入理解——张鑫旭](https://www.zhangxinxu.com/wordpress/2019/12/css-flex-deep/)

### align-self（单个控制子元素侧轴方向布局）

```css
.container {
	display: flex;
	height: 500px;
	justify-content: space-around;
	align-items: flex-start;
}
.item-2 {
	align-self: center;
}
.item-3 {
	align-self: flex-end;
}
.item-4 {
	align-self: center;
}
.item-6 {
	align-self: center;
}
```


### 结语：

-   自己对弹性布局早已闻其名，但却一直一知半解，此文为自己做个小总结 💦💦。

::: info 重点

-   如果 flex 的属性值只有一个值则：

如果是数值，例如 flex: 1，则这个 1 表示 flex-grow，此时 flex-shrink 和 flex-basis 都使用默认值，分别是 1 和 auto。
如果是长度值，例如 flex: 100px，则这个 100px 显然指 flex-basis，因为 3 个缩写 CSS 属性中只有 flex-basis 的属性值是长度值。此时 flex-grow 和 flex-shrink 都使用默认值，分别是 0 和 1

-   如果 flex 的属性值有两个值，则：

第 1 个值一定指 flex-grow，第 2 个值根据值的类型不同表示不同的 CSS 属性，具体规则如下：
如果第 2 个值是数值，例如 flex: 1 2，则这个 2 表示 flex-shrink，此时 flex-basis 使用默认值 auto。
如果第 2 个值是长度值，例如 flex: 1 100px，则这个 100px 指 flex-basis，此时 flex-shrink 使用默认值 1。

-   如果 flex 的属性值有三个值，则这 3 个值分别表示 flex-grow，flex-shrink 和 flex-basis。
    :::
