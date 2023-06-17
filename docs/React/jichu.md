# 简单总结

## setState

- 直接写 `setState` 是一个异步的执行过程。
- `setTimeout` 中写 `setState` 是一个同步的执行过程。
- 还有一些自定义 `DOM` 事件中写 `setState` 也是一个同步的执行过程。

## 函数组件

- 纯函数，输入 props，输出 JSX。
- 没有实例，没有生命周期，没有 state。
- 不能扩展其他方法。

## 非受控组件使用场景

- 必须手动操作 DOM 元素，setState 实现不了的。
- 文件上传这种交互的 setState 实现不了。
- 某些富文本编辑器，需要传入 DOM 元素。

### 受控组件 VS 非受控组件

- 优先使用受控组件，符合 React 设计原则。（数据驱动视图）
- 必须操作 DOM 时再使用非受控组件。

## Portals 使用场景

- 父组件设置了一些像 overflow:hidden; 等触发 BFC 的属性，影响子组件的展示。
- 父组件 z-index 值太小。
- fixed 需要放在 body 第一层级。

## context

- 设置一些公共信息（语言、主题、颜色之类的），可以在每个组件里使用。
- 用 props 感觉太繁琐。
- 用 Redux 又小题大做。

```js
// 创建 Context 填入默认值（任何一个 js 变量）
const ThemeContext = React.createContext('light');
```

## 异步组件

- React.lazy
- React.Suspense

`Suspense` `使得组件可以“等待”某些操作结束后，再进行渲染。目前，Suspense` 仅支持的使用场景是：通过 `React.lazy` 动态加载组件。它将在未来支持其它使用场景，如数据获取等。

## SCU 使用总结

- `SCU` 默认返回 `true` ，即 `React` 默认重新渲染所有子组件。
- 当 `props` 或 `state` 发生变化时，`shouldComponentUpdate()` 会在渲染执行之前被调用。返回值默认为 `true`。首次渲染或使用 `forceUpdate()` 时不会调用该方法。
- 不建议在 `shouldComponentUpdate()` 中进行深层比较或使用 `JSON.stringify()`。这样非常影响效率，且会损害性能。
- 此方法仅作为性能优化的方式而存在。不要企图依靠此方法来“阻止”渲染，因为这可能会产生 `bug`。你应该考虑使用内置的 `PureComponent` 组件，而不是手动编写 `shouldComponentUpdate()`。`PureComponent` 会对 `props` 和 `state` 进行浅层比较，并减少了跳过必要更新的可能性。

## PureComponent 和 memo

- `PureComponent` 其实就是在 SCU 中实现了浅比较。
- `memo` 函数组件中的 `PureComponent`。
