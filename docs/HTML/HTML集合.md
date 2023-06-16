# HTML大杂烩

## 一、inline 元素、block 元素、inline-block 元素的具体解释

### inline 元素

`inline` 元素全称`Inline Elements`。一个内联元素不会开始新的一行，并且只占有必要的宽度。

-   特点:

    -   和其他元素都在一行上。
    -   元素的高度、宽度、行高及顶部和底部边距不可设置。
    -   元素的宽度就是它包含的文字或图片的宽度，不可改变。

### block 元素

`block` 元素全称 `Block-level Elements`，一个块级元素总是开始新的一行，并且占据可获得的全部宽度(左右都会尽可能的延伸到它能延伸的最远)

-   特点:

    -   每个块级元素都从新的一行开始，并且其后的元素也另起一行。（一个块级元素独占一行）;
    -   元素的高度、宽度、行高以及顶和底边距都可设置;
    -   元素宽度在不设置的情况下，是它本身父容器的 100%（和父元素的宽度一致），除非设定一个宽度。

### inline-block 元素

-   inline-block 元素，它像内联元素，但具有宽度和高度。

-   特点:

    -   和其他元素都在一行上；
    -   元素的高度、宽度、行高以及顶和底边距都可设置

## 二、常见的 inline 元素、block 元素、inline-block 元素

-   常见的 inline 内联元素：

span、img、a、lable、input、abbr（缩写）、em（强调）、big、cite（引用）、i（斜体）、q（短引用）、textarea、select、small、sub、sup，strong、u（下划线）、button（默认 display：inline-block））

-   常见的 block 块级元素：

div、p、h1…h6、ol、ul、dl、table、address、blockquote、form

-   常见的 inline-block 内联块元素：

img、input

## 三.inline 元素、block 元素、inline-block 元素的区别

-   块级元素会独占一行，而内联元素和内联块元素则会在一行内显示。

-   块级元素和内联块元素可以设置 width、height 属性，而内联元素设置无效。

-   块级元素的 width 默认为 100%，而内联元素则是根据其自身的内容或子元素来决定其宽度。
