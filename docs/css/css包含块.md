---
title: 'CSS中的包含块'
---

## 一、为什么要了解包含块？
一个元素的尺寸和位置经常受其包含块(containing block)的影响。对于一些属性，例如 width, height, padding, margin，绝对定位元素的偏移值 （比如 position 被设置为 absolute 或 fixed），当我们对其赋予百分比值时，这些值的计算值，就是通过元素的包含块计算得来。

## 二、如何确定包含块？

**确定一个元素的包含块的过程完全依赖于这个属性的 position 属性。**

- 1、如果 position 属性为 **static 、 relative 、 sticky**，包含块可能由它的最近的祖先**块元素**（比如说inline-block, block 或 list-item元素）的内容区的边缘组成，也可能会建立格式化上下文(比如说 a table container, flex container, grid container, 或者是 the block container 自身)。  

- 2、如果 position 属性为 absolute ，包含块就是由它的最近的 position 的值不是 static （也就是值为fixed, absolute, relative 或 sticky）的祖先元素的内边距区的边缘组成。  

- 3、如果 position 属性是 fixed，在连续媒体的情况下(continuous media)包含块是 viewport ,在分页媒体(paged media)下的情况下包含块是分页区域(page area)。  

- 4、如果 position 属性是 absolute 或 fixed，包含块也可能是由满足以下条件的最近父级元素的内边距区的边缘组成的：  

```js
1.A transform or perspective value other than none  
2.A will-change value of transform or perspective  
3.A filter  value other than none or a will-change value of filter(only works on Firefox).  
4.A contain value of paint (例如: contain: paint;)  
```