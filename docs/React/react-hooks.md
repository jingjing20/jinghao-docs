---
title: 'React Hooks'
---

## react hooks 初识

-   useState 和 自定义 hook。（自定义 hook 必须以 use 开头）

```typescript
import React, { useState, useEffect } from 'react';
import useMousePosition from '../hooks/useMousePosition'; //自定义 Hooks
const LikeButton: React.FC = () => {
	const [like, setlike] = useState(0); //useState
	const [on, setOn] = useState(true);
	const positions = useMousePosition();
	useEffect(() => {
		document.title = `点击了${like}次`;
	});
	return (
		<>
			<button
				onClick={() => {
					setlike(like + 1);
				}}
			>
				{like}
			</button>
			<button
				onClick={() => {
					setOn(!on);
				}}
			>
				{on ? 'on' : 'off'}
			</button>
			<h1>
				X: {positions.x}, Y : {positions.y}
			</h1>
		</>
	);
};

export default LikeButton;
```

## Capture Value

-   Capture Value 是一个在 React 中老生常谈的问题，下面结合一个小 Demo 学习它。[来源](https://overreacted.io/a-complete-guide-to-useeffect/)

```js
function Counter() {
	const [count, setCount] = useState(0);

	function handleAlertClick() {
		setTimeout(() => {
			alert('You clicked on: ' + count);
		}, 3000);
	}

	return (
		<div>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>Click me</button>
			<button onClick={handleAlertClick}>Show alert</button>
		</div>
	);
}
```

**然后按如下步骤操作：**

-   1）点击 Click me 按钮，把数字增加到 3。
-   2）点击 Show alert 按钮。
-   3）在 setTimeout 触发之前点击 Click me，把数字增加到 5。

**最后 Alert 的结果是 3！我们能得出以下结论。**

-   每次渲染相互独立，因此每次渲染时组件中的状态、事件处理函数等等都是独立的，或者说只属于所在的那一次渲染。
-   我们在 count 为 3 的时候触发了 handleAlertClick 函数，这个函数所记住的 count 也为 3。
-   三秒种后，刚才函数的 setTimeout 结束，输出当时记住的结果：3。

**解决办法：**

可以使用 useRef 这个 Hooks 来解决这个问题。

## State Hooks 基础

-   实现一个计时器

```js
import React, { useEffect, useState, useReducer } from 'react';

//类组件
class MyCount extends React.Component {
	state = {
		count: 0,
	};

	componentDidMount() {
		this.interval = setInterval(() => {
			this.setState({
				count: this.state.count + 1,
			});
		}, 1000);
	}

	// 在 componentWillUnmount 生命周期函数里面清除定时器之类的
	// 不然会造成内存泄漏
	componentWillUnmount() {
		if (this.interval) {
			clearInterval(this.interval);
		}
	}

	render() {
		return <span>{this.state.count}</span>;
	}
}

// useReducer
// 定义一个 'Reducer' 函数，它接受两个参数，第一个为 state，第二个为 action。 然后根据传进来的 action 操作 state
function countReducer(state, action) {
	switch (action.type) {
		case 'add':
			return state + 1;
		case 'minus':
			return state - 1;
		default:
			return state;
	}
}

// 函数组件 hooks
function MyCountFunc() {
	// const [count, setCount] = useState(0)  //useState实现

	// useReducer 接受一个操作state的函数和 state 的初始值
	const [count, dispatchCount] = useReducer(countReducer, 0); //useReducer实现

	useEffect(() => {
		const interval = setInterval(() => {
			// setCount(count => count + 1)    //useState
			dispatchCount({ type: 'minus' });
		}, 1000);
		return () => clearInterval(interval);
	}, []);
	return <span>{count}</span>;
}

export default MyCountFunc;
```

## Effect Hooks 基础

### useEffect

-   页面初始化`useEffect`会执行 return 前面的代码。
-   然后页面的任何数据更新了，组件就会重新渲染，就是先把原来的组件卸载，然后重新渲染更新的组件。
-   如下代码，初始化打印 `effect invoked`，更新页面先打印`effect deteched`，然后打印`effect invoked`（因为更新的时候相当于先把原先的组件销毁再重新渲染新的组件）。
-   `useEffect`里面第二个参数是个数组 []，这个数组里面放`useEffect`用到的外面的数据（依赖）。然后`useEffect`就会根据数组里面的数据来判断要不要重新执行。只有写在里面的数据发生改变的时候，`useEffect`才会重新执行。如果是个空数组，则只会执行一次，如果不填第二个参数，则不管啥数据改变了，`useEffect`都会执行。

```js
useEffect(() => {
	console.log('Effect invoked');
	// 组件卸载的时候执行 return 的函数
	return () => console.log('Effect deteched');
}, []);
```

### useLayoutEffect 与 useEffect 的区别

-   `useLayoutEffect` 比 `useEffect` 先执行。
-   `useLayoutEffect` 是在页面更新时`DOM`树渲染成`HTML`之前执行的
-   `useEffect` 是在页面更新时`DOM`树渲染成 HTML 之后执行的
-   所以很少用 `useLayoutEffect`，因为如果`useLayoutEffect`执行时间过长，页面渲染就会等待，造成页面卡顿，降低用户体验。
