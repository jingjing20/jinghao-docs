---
title: 'React 17 新特性'
---

## 1、更改事件委托

### 更新前

从技术上讲，始终可以在应用程序中嵌套不同版本的 React。但是，由于 **_React 事件系统的工作原理_**，这很难实现。

-   我们在 React 组件中写事件绑定一般会像如下实现：

```js
<button onClick={handleClick}>
```

-   对应的原生的 DOM 操作如下：

```javascript
myButton.addEventListener('click', handleClick);
```

-   但是 React 实际上并不会将它们绑定到 DOM 节点上。React 中是直接在 `document`节点上为每一种事件类型都附加一个处理器。这和我们所知的事件委托是一个意思。

-   自从`React`发布以来，`React` 一直自动进行事件委托。当 `document` 上触发 `DOM` 事件时，`React` 会找出调用的组件，然后 `React` 事件会在组件中向上 “冒泡”。直到冒泡到了 `document` 上，React 在其中安装了事件处理器进行处理。

### 更新原因

-   React 一直以来遵循 `all-or-nothing` 的升级策略。你可以继续使用旧版本，也可以将整个应用程序升级至新版本。但没有介于两者之间的情况。就是不能渐进式更新，只能全量更新。
-   `React 17` 想实现渐进式更新，意思是页面上可以有不同版本的 `React`。这样原来`React`中的事件委托机制就会产生问题了。如果页面上有多个 React 版本，他们都将在顶层注册事件处理器。这会破坏 `e.stopPropagation()`：如果嵌套树结构中阻止了事件冒泡，但外部树依然能接收到它。这会使不同版本 React 嵌套变得困难重重。

### 更新后

-   **在 React 17 中，React 将不再向 `document` 附加事件处理器。而会将事件处理器附加到渲染 React 树的根 DOM 容器中：**

```javascript
const rootNode = document.getElementById('root');
ReactDOM.render(<App />, rootNode);
```

-   在 React 16 或更早版本中，React 会对大多数事件执行 `document.addEventListener()`。React 17 将会在底层调用 `rootNode.addEventListener()`。

![A diagram showing how React 17 attaches events to the roots rather than to the document](https://zh-hans.reactjs.org/static/bb4b10114882a50090b8ff61b3c4d0fd/1e088/react_17_delegation.png)

来源——[React 官方文档](https://zh-hans.reactjs.org/blog/2020/08/10/react-v17-rc.html)

## 2、去除了事件池

### 关于 React 中的合成事件的事件池

-   在 React 17 之前，`合成事件对象` 会被放进一个叫 `事件池` 的地方统一管理。
-   这样做的目的是能够实现 `事件对象` 的复用，进而提高性能。
-   但是这样处理的话，每当事件处理函数执行完毕之后，对应的合成事件对象就会被`"格式化"`，为下一次复用做准备，这就意味着我们在事件处理函数执行完毕之后就拿不到事件对象了。如下这个例子（官方提供）

```js
function handleChange(e) {
	// This won't work because the event object gets reused.
	setTimeout(() => {
		console.log(e.target.value); // Too late!
	}, 100);
}
```

-   如果你在一个 DOM 元素上绑定上面这个事件处理函数，触发之后控制台会提示如下信息：

```js
Warning: This synthetic event is reused for performance reasons.
If you're seeing this, you're accessing the property `target` on a released/nullified synthetic event.
This is set to null. If you must keep the original synthetic event around, use `event.persist()`.
See https://fb.me/react-event-pooling for more information.
```

-   根据这个提示信息能够看到解决方法：要想拿到目标事件对象，必须显式地告诉 React——我永远需要它，也就是调用 `e.persist()` 函数，像下面这样：

```js
function handleChange(e) {
	// This won't work because the event object gets reused.
	event.persist();
	setTimeout(() => {
		console.log(e.target.value); // Too late!
	}, 100);
}
```

-   React 17 拥抱了新时代的潮流，重新在研发体验和向下兼容性能之间做了选择，这一次，它选择了前者——**放弃事件池，为每一个合成事件创建新的对象**。因此在 React 17 中，我们不需要 e.persist()，也可以随时随地访问我们想要的事件对象。

## 3、useEffect 副作用清理时机的改动

-   React 16 中当组件被卸载时 useEffect 副作用中的清理函数是会同步执行的，对于大型应用程序来说，这不是理想选择，因为同步会减缓屏幕的过渡（例如，切换标签）。

-   **在 React 17 中，副作用清理函数总会异步执行 —— 如果要卸载组件，则清理会在屏幕更新后运行。**

    这反映了副作用本身如何更紧密地运行。在极少数情况下，你可能希望依靠同步执行，可以改用 `useLayoutEffect`。

## 4、全新的 JSX 转换规则

### React 16 之前的转换规则

-   `React 17` 之前 `React` 中的 `jsx` 会被 `babel` 转换成 `React.createElement()` 的调用，在 `React.createElement()` 中对传入的参数进行一顿处理后，传入 `reactElement()` 并返回。

-   例如，假设源代码如下：

```javascript
import React from 'react';

function App() {
	return <h1>Hello World</h1>;
}
```

-   旧的 JSX 转换会将上述代码变成普通的 JavaScript 代码：

```javascript
import React from 'react';

function App() {
	return React.createElement('h1', null, 'Hello world');
}
```

-   在旧的转换规则下如果使用了 JSX，就必须在引入 `React`，因为 JSX 将被编译成 `React.createElement()`。

### React 17 的转换规则

-   React 17 在 React 的 package 中引入了两个新入口，这些入口只会被 Babel 和 TypeScript 等编译器使用。新的 JSX 转换**不会将 JSX 转换为 `React.createElement`**，而是自动从 React 的 package 中引入新的入口函数并调用。

-   例如，假设源代码如下：

```javascript
function App() {
	return <h1>Hello World</h1>;
}
```

-   下方是新 JSX 被转换编译后的结果：

```javascript
// 由编译器引入（禁止自己引入！）
import { jsx as _jsx } from 'react/jsx-runtime';

function App() {
	return _jsx('h1', { children: 'Hello world' });
}
```

-   注意，此时源代码**无需引入 React** 即可使用 JSX 了！ 当然了，如果要用到其他 React 中的导出还是需要引入 `React` 的。
