# setState 同步异步问题

::: danger 特别提醒
setState 并不是单纯同步/异步的，它的表现会因调用场景的不同而不同：在 React 钩子函数及合成事件中，它表现为异步；而在 setTimeout、setInterval 等函数中，包括在 DOM 原生事件中，它都表现为同步。这种差异，本质上是由 React 事务机制和批量更新机制的工作方式来决定的。
:::

## 要探究 setState 为什么可能是异步的，先了解 setState 执行后会发生什么？

事实上 setState 内部执行过程是很复杂的，大致过程包括更新 `state`，创建新的 `VNode`，再经过 `diff` 算法比对差异，决定渲染哪一部分以及怎么渲染，最终形成最新的 UI。这一过程包含组件的四个生命周期函数。

- shouldComponentUpdate()
- componentWillUpdate()
- render()
- componentDidUpdate()

**需要注意的是如果子组件的数据依赖于父组件，还会执行 componentWillReceiveProps() 这个生命周期函数。**

::: tip 要点
假如 `setState` 是同步更新的，每更新一次，这个过程都要完整执行一次，无疑会造成性能问题。虽然这些生命周期为纯函数，对性能还好，但是 `diff` 比较、更新 `DOM` 会对性能影响较大。
:::

## setState 何时同步何时异步？

在 `React` 中，如果是**由 `React` 引发的事件处理（比如通过 `onClick` 引发的事件处理）、以及生命周期函数调用 `setState` 不会同步更新 `this.state`** ，除此之外的 `setState` 调用会同步执行 `this.state`。所谓“除此之外”，指的是**绕过 `React` 通过 `addEventListener` 直接添加的事件处理函数，还有通过 `setTimeout/setInterval` 产生的异步调用。**

### 几个例子如下：

```js
class StateDemo extends React.Component {
  constructor(props) {
    super(props);
    // 第一，state 要在构造函数中定义
    this.state = {
      count: 0
    };
  }
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.increase}>累加</button>
      </div>
    );
  }
  increase = () => {
    // 第二，不要直接修改 state ，使用不可变值 ----------------------------
    // this.state.count++ // 错误
    this.setState({
      count: this.state.count + 1
    });
    // 操作数组、对象的的常用形式

    // 第三，setState 可能是异步更新（有可能是同步更新） ----------------------------

    this.setState(
      {
        count: this.state.count + 1
      },
      () => {
        // 联想 Vue $nextTick - DOM
        console.log('count by callback', this.state.count); // 回调函数中可以拿到最新的 state
      }
    );
    console.log('count', this.state.count); // 异步的，拿不到最新值

    // setTimeout 中 setState 是同步的
    setTimeout(() => {
      this.setState({
        count: this.state.count + 1
      });
      console.log('count in setTimeout', this.state.count);
    }, 0);

    // 自己定义的 DOM 事件，setState 是同步的。再 componentDidMount 中

    // 第四，state 异步更新的话，更新前会被合并 ----------------------------
    // 传入对象，会被合并（类似 Object.assign ）。执行结果只一次 +1
    this.setState({
      count: this.state.count + 1
    });
    this.setState({
      count: this.state.count + 1
    });
    this.setState({
      count: this.state.count + 1
    });

    // 传入函数，不会被合并。执行结果是 +3
    this.setState((prevState, props) => {
      return {
        count: prevState.count + 1
      };
    });
    this.setState((prevState, props) => {
      return {
        count: prevState.count + 1
      };
    });
    this.setState((prevState, props) => {
      return {
        count: prevState.count + 1
      };
    });
  };
}
```

## React 是怎样控制异步和同步的呢？

在 `React` 的 `setState` 函数实现中，会根据一个变量 `isBatchingUpdates` 判断是直接更新 `this.state` 还是放到队列中回头再说，在 `React` 的生命周期函数以及合成事件执行前，已经被 `React` 悄悄修改为了 `true`，这时我们所做的 `setState` 操作自然不会立即生效。当函数执行完毕后，事务的 `close` 方法会再把 `isBatchingUpdates` 改为 `false`。

## 来个题

```js
class Example extends React.Component {
  constructor() {
    super();
    this.state = {
      val: 0
    };
  }

  componentDidMount() {
    this.setState({ val: this.state.val + 1 });
    console.log(this.state.val); // 第 1 次 log

    this.setState({ val: this.state.val + 1 });
    console.log(this.state.val); // 第 2 次 log

    setTimeout(() => {
      this.setState({ val: this.state.val + 1 });
      console.log(this.state.val); // 第 3 次 log

      this.setState({ val: this.state.val + 1 });
      console.log(this.state.val); // 第 4 次 log
    }, 0);
  }

  render() {
    return null;
  }
}
```

::: details 答案解析
1、第一次和第二次都是在 react 自身生命周期内，触发时 isBatchingUpdates 为 true，所以并不会直接执行更新 state，而是加入了 dirtyComponents，所以打印时获取的都是更新前的状态 0。

2、两次 setState 时，获取到 this.state.val 都是 0，所以执行时都是将 0 设置成 1，在 react 内部会被合并掉，只执行一次。设置完成后 state.val 值为 1。

3、setTimeout 中的代码，触发时 isBatchingUpdates 为 false，所以能够直接进行更新，所以连着输出 2，3。

输出： 0 0 2 3
:::
