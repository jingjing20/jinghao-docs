# react 中的 ts 类型简要介绍

## JSX.Element

- 一般写的 `react` 组件不需要写返回的类型，因为它会自动推导，正常都是返回的 `JSX.Element`
- `JSX.Element` 继承自 `React.ReactElement`
- 如果想描述一个 jsx 类型，用 React.ReactElement 就可以了

![alt text](image.png)

- `ReactElement` 只能是一个 `JSX.Element`，但如果传入 null、number 等其他类型就会报错了

## ReactNode

- `ReactNode` 用于描述一个节点的类型，它可以是 `JSX.Element`、`string`、`number`、`Iterable<ReactNode>`、`ReactPortal`、`boolean`、`null`、`undefined` 等类型，下面的就是源码。

```ts
type ReactNode =
  | ReactElement
  | string
  | number
  | Iterable<ReactNode>
  | ReactPortal
  | boolean
  | null
  | undefined
  | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_REACT_NODES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_REACT_NODES];
```

- 这三个类型的关系 ReactNode > ReactElement > JSX.Element。
- 所以一般情况下如果想描述一个参数接收 JSX 类型，直接用 ReactNode 就可以了。
