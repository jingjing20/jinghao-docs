---
title: 'Vue.js 内部运行机制笔记'
---
## 全局概览图

![mark](http://image.jinghao.xyz/blog/20200617/EGacTh2XUxIR.png)

## 初始化及挂载   

![mark](http://image.jinghao.xyz/blog/20200617/dRXt0fr4Xrxi.png)  

在用 `new Vue()` 之后， `Vue` 会调用 `_init` 函数进行初始化即图上 `init` 过程。在此过程中会初始化生命周期、事件、 `props`、 `methods`、 `data`、 `computed` 与 `watch` 等。其中最重要的是通过 `Object.defineProperty` 设置 `setter` 与 `getter` 函数，用来实现**响应式**以及**依赖收集**。  

初始化之后调用 $mount 会挂载组件，挂载组件前需要进行**编译**步骤。

## 编译  

编译分为三个阶段，分别为 `parse` 、`optimize` 、 `generate` ，经过这三个阶段后，最终会得到一个渲染函数 `render function()`。

![mark](http://image.jinghao.xyz/blog/20200617/XHTX7xYKYF6D.png)

### parse  

parse 会用正则等方式解析 template 模板中的指令、class、style等数据，最终形成 AST 。  

### optimize  

optimize 的主要作用是**标记 static 静态节点，这是 Vue 在编译过程中的一处优化**，后面在 update 更新界面的时候，会有一个 patch 过程，在此过程中 diff 算法会**直接跳过已经标记为静态节点的节点**，从而减少了比较的过程，优化了 patch 的性能。  

### generate  

是将 AST 装化成 render function() 字符串的过程。

**经过 parse 、 optimize 、 generate 这三个阶段后，组件就会存在渲染 VNode 所需的 render function() 了**。  

## 响应式原理  
 
Vue 官网深入响应式图
![mark](http://image.jinghao.xyz/blog/20200617/lNjXsR1ONyC4.png)  

在 init 的时候通过 Object.defineProperty 进行了绑定 getter 跟 setter，它使得当被设置的对象被读取的时候会执行 getter 函数，而在当被赋值的时候会执行 setter 函数。  

当 render function 被渲染的时候，读取所需对象的值（即每个组件中的 data() 函数中 return 的对象。此处一个问题，为什么组件内的 data 是函数不是对象），会触发 getter 函数进行 **依赖收集**，进行依赖收集的目的是将组件中的依赖的 data 通知观察者 Watcher 。

之后在修改组件依赖项的值的时候，会触发对应的 setter ， setter 通知之前已经完成依赖收集的 Watcher ，告诉它们自己的值改变了，需要重新渲染视图。这时候这些 Watcher 就会开始调用 update 来更新视图，当然这中间还有一个 patch 的过程以及使用队列来 **异步更新（$nextTick）** 的策略。

## Virtual DOM  

render function 会被转化成 VNode 节点。Virtual DOM 其实就是一棵以 JavaScript 对象（ VNode 节点）作为基础的树，用对象属性来描述节点，实际上它只是一层对真实 DOM 的抽象。最终可以通过一系列操作使这棵树映射到真实环境上。由于 Virtual DOM 是以 JavaScript 对象为基础而不依赖真实平台环境，所以使它具有了跨平台的能力，比如说浏览器平台、Weex、Node 等。  

当数据变化后，执行 render function 就可以得到一个新的 VNode 节点，我们如果想要得到新的视图，最简单粗暴的方法就是直接解析这个新的 VNode 节点，然后用 innerHTML 直接全部渲染到真实 DOM 中。但是其实我们只对其中的一小块内容进行了修改，这样做似乎有些「浪费」。

那么我们为什么不能只修改那些「改变了的地方」呢？这个时候就要介绍我们的「patch」了。我们会将新的 VNode 与旧的 VNode 一起传入 patch 进行比较，经过 diff 算法得出它们的「差异」。最后我们只需要将这些「差异」的对应 DOM 进行修改即可。