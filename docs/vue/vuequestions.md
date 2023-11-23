# Vue 相关知识

## 1、v-if 和 v-show 区别

- v-show 通过 CSS display 控制显示隐藏。
- v-if 组件真正的渲染和销毁，而不是显示的隐藏。
- 频繁切换显示状态用 v-show，否则就用 v-if。

## 2、为何在 v-for 中要用 key

- 必须用 key ，而且不能是 index 和 random。
- diff 算法中通过 tag 和 key 来判断是否是 sameNode（同一个节点）。
- 减少渲染次数，提升渲染性能。

## 3、常见 Vue 组件通讯

- 父子组件用 `props` 和 `this.$emit`
- 自定义事件 `event.$on` `event.$off` `event.$emit`
- `vuex`

## 4、生命周期函数

- **beforeCreate**：在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用。

- **created**：实例已经创建完成之后被调用。在这一步，实例已完成以下的配置：数据监视(data observer)，属性和方法的运算， watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。
- **beforeMount**：在挂载开始之前被调用相关的 render 函数首次被调用。
- **mounted**：el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用此钩子函数，如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$el 也在文档内。
- **beforeUpdate**：数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。
- **updated**：由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。
- **activated**：keep-alive 组件激活时调用。
- **deactivated**：keep-alive 组件停用时调用。
- **beforeDestroy**：实例销毁之前调用。在这一步，实例仍然完全可用。
- **destroyed**：Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。

## 5、在哪个生命周期内调用异步请求？

可以在钩子函数 `created`、`beforeMount`、`mounted` 中进行调用，因为在这三个钩子函数中，`data` 已经创建，可以将服务端端返回的数据进行赋值。但是本人推荐在 `created` 钩子函数中调用异步请求，因为在 `created` 钩子函数中调用异步请求有以下优点：

- 能更快获取到服务端数据，减少页面 loading 时间。
- ssr 不支持 `beforeMount` 、`mounted` 钩子函数，所以放在 created 中有助于一致性。

## 6、computed 和 watch 的区别和运用的场景？

**computed：** 是计算属性，依赖其它属性值，并且 **computed 的值有缓存，只有它依赖的属性值发生改变，下一次获取 computed 的值时才会重新计算 computed 的值。**

**watch：** 更多的是**观察**的作用，类似于某些数据的监听回调 ，每当监听的数据变化时都会执行回调进行后续操作。

**运用场景：**

- 当我们需要进行数值计算，并且依赖于其它数据时，应该使用 `computed`，因为可以利用 `computed` 的缓存特性，避免每次获取值时，都要重新计算。

- 当我们需要在数据变化时执行异步或开销较大的操作时，应该使用 `watch`，使用  `watch`  选项允许我们执行异步操作 ( 访问一个 `API` )，限制我们执行该操作的频率，并在我们得到最终结果前，设置中间状态。这些都是计算属性无法做到的。

## 7、Vue 的父子组件生命周期执行顺序？

Vue 的父组件和子组件生命周期钩子函数执行顺序可以归类为以下 4 部分：

- 加载渲染过程
  父 `beforeCreate` -> 父 `created` -> 父 `beforeMount` -> 子 `beforeCreate` -> 子 `created` -> 子 `beforeMount` -> 子 `mounted` -> 父 `mounted`

- 子组件更新过程
  父 `beforeUpdate` -> 子 `beforeUpdate` -> 子 `updated` -> 父 `updated`

- 父组件更新过程
  父 `beforeUpdate` -> 父 `updated`

- 销毁过程
  父 `beforeDestroy` -> 子 `beforeDestroy` -> 子 `destroyed` -> 父 `destroyed`

## 8、何时需要使用 beforeDestory

- 解绑自定义事件 `event.$off`
- 清除定时器
- 解绑自定义的 `DOM` 事件，如 `addEventListener('scroll')`

**上面三个如果不做的话，都有可能造成内存泄漏**

## 9、为什么组件里的 date 是个函数？

- 因为对象是一个引用数据类型，如果 `data` 是一个对象的情况下会造成所有组件共用一个 `data`。
- 当 `data` 是一个函数的情况下，每次函数执行完毕后都会返回一个新的对象，这样的话每个组件都会维护一份独立的对象`data`

## 10、Vue 为何是异步渲染？

只要侦听到数据变化， `Vue` 将开启一个队列，并缓冲在**同一事件循环中**发生的所有数据变更。如果同一个 `watcher` 被多次触发，只会被推入到队列中一次。这种在缓冲时去除重复数据对于避免不必要的计算和 `DOM` 操作是非常重要的。可以提高渲染性能。【每个 `watcher` 都有对应的 ID 重复的就不会添加到队列了】

## 11、Vue.nextTick() 有什么用？

为了在数据变化之后等待 Vue 完成更新 DOM，可以在数据变化之后立即使用 Vue.nextTick(callback)。这样回调函数将在 DOM 更新完成后被调用。

```js
var vm = new Vue({
  el: '#example',
  data: {
    message: '123'
  }
});
vm.message = 'new message'; // 更改数据
vm.$el.textContent === 'new message'; // false
Vue.nextTick(function () {
  vm.$el.textContent === 'new message'; // true
});
```

## 12、vue 的组件怎么做到样式不覆盖

### 实现方法

在 `<style>` 标签中加上 scoped 属性
在 vue 文件中的 style 标签上，有一个特殊的属性：scoped。当一个 style 标签拥有 scoped 属性时，它的 CSS 样式就只能作用于当前的组件，也就是说，该样式只能适用于当前组件元素。通过该属性，可以使得组件之间的样式不互相污染。如果一个项目中的所有 style 标签全部加上了 scoped，相当于实现了样式的模块化。

### 实现原理

vue 中的 scoped 通过在 DOM 结构以及 css 样式上加唯一不重复的标记:data-v-hash 的方式，以保证唯一（而这个工作是由过 PostCSS 转译实现的），达到样式私有化模块化的目的。

总结一下 scoped 三条渲染规则：

- 给 HTML 的 DOM 节点加一个不重复 data 属性(形如：data-v-19fca230)来表示他的唯一性

- 在每句 css 选择器的末尾（编译后的生成的 css 语句）加一个当前组件的 data 属性选择器（如[data-v-19fca230]）来私有化样式

- 如果组件内部包含有其他组件，只会给其他组件的最外层标签加上当前组件的 data 属性

给个例子：

```html
<style lang="scss" scoped>
  .test {
    background: blue;
    span {
      color: red;
    }
  }
</style>
<template>
  <div class="test">
    <span>hello world !</span>
  </div>
</template>
```

转义后如下：

```html
<style lang="css">
  .test[data-v-ff86ae42] {
    background: blue;
  }
  .test span[data-v-ff86ae42] {
    color: red;
  }
</style>
<template>
  <div class="test" data-v-ff86ae42>
    <span data-v-ff86ae42>hello world !</span>
  </div>
</template>
```

### scoped 的穿透

- 有时候在一个项目中引用了第三方组件，需要在组件中局部修改第三方组件的样式，而又不能不用 scoped 属性造成组件之间的样式污染。
- 此时就需要穿透`scoped`。

- 尤大大说 `scope` 的功能是为了让 `css` 更规范，能更简单让`css` 仅对本组件的内容起到作用而不影响其他组件，这样也是为了减少各组件之间的样式黏性，可以避免修改单组件样式而影响到整个项目众多组件的问题。反正能用外联 `css` 或公共 `css` 文件建立共有的 `css`，所以我是非常建议使用 `scope` 但别穿透它。

## 13、.sync 和 v-model

- 更简洁的实现子组件修改父组件传递的 props。
- 就像我们最开始的问题一样，子组件修改父组件传递的属性，这个就是一个更简洁的方案。
- 相同点： 实现 props 的 “双向绑定”，都是语法糖。
- 不同点： 单个组件可以将 .sync 作用于多个属性，而 v-model 只能使用一个

### v-model

- 作用于自定义组件时，默认会利用名为 `value` 的 `prop` 和名为 `input` 的事件（可在子组件中通过 `model` 属性更改属性和事件名）。

```js
// 父组件
<comp v-model="bar.name"></comp>
// 基本等同于 ↓
<comp :value="bar.name" @input="bar.name = $event"></comp>
// 但是不单单只是做了类语法糖的这种处理，还有其他的比如：
// 绑定的如果是对象属性，回调会应用 $set 去赋值处理

// 子组件：
<div>{{value}}</div>
// 接收参数
props: ["value"]
// 更新方式
this.$emit("input", newValue)

```

### .sync

实现机制和 v-model 是类似的。当有需要在子组件修改父组件传入的值时这个方法很好用。

```js
// 父组件
<comp :foo.sync="bar.name"></comp>
// 等同于 ↓
<comp :foo="bar.name" @update:foo="bar.name = $event"></comp>

// 子组件内更新方式
this.$emit("update:foo", newValue)

// 同时设置一个对象的全部属性
bar: {
  nav: 1,
  foo: 2
}
<comp v-bind.sync="bar"></comp>
// 等同于 ↓
<comp :nav.sync="bar.nav" :foo.sync="bar.foo"></comp>
// 把 bar 对象中的每一个 property 都作为一个独立的 prop 传进去，然后各自添加用于更新的 v-on 监听器

```

- 相对于传统的 子组件更新父组件传递的值，每次子组件抛出一个事件，父组件监听事件并执行更新值的操作，使用这 2 个 api，显然要简洁的多。

## 14、生命周期

### 路由切换

- 从路由 `/AAA` 跳转到 `/BBB`，对应组件生命周期执行结果如下：

```js
BBB beforeCreate -> BBB created -> BBB beforeMount -> AAA beforeDestroy -> AAA destroyed -> BBB mounted
```

### 父子组件

- 加载渲染过程

```js
父 beforeCreate -> 父 created -> 父 beforeMount -> 子 beforeCreate -> 子 created -> 子 beforeMount -> 子 mounted -> 父 mounted
```

- 子组件更新过程

```js
父 beforeUpdate -> 子 beforeUpdate -> 子 updated -> 父 updated
```

- 父组件更新过程

```js
父 beforeUpdate -> 父 updated
```

- 销毁过程

```js
父 beforeDestroy -> 子 beforeDestroy -> 子 destroyed -> 父 destroyed
```
