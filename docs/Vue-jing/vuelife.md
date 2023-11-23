# vue 生命周期函数

## vue 生命周期函数

#### 先给一张 vue 官网介绍生命周期的流程图


::: danger 温馨提示
官方给的东西肯定很官方啦，不过单看一张图对理解 vue 生命周期钩子函数来说肯定还是有些难度的。不过各位小伙伴不要着急，本文 **<font face="黑体" color=red size="3"> \***以简单直接的实例**\* </font>** 来对此图进行理解。
:::

---

::: tip 温馨提示
花 10 分钟读下去，相信我你一定会有一些收获（仅仅指刚入门的小伙伴，作者也是一名刚入门的前端小白，大佬请见谅哈。😁😁）
:::

### Vue2.0 的生命周期钩子一共有 10 个分别简单介绍如下：

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

---

::: tip 提醒
来吧 上代码！代码直接可以直接运行哦。
:::

```js
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Vue-LifeClyle</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
</head>

<body>
    <div id="app" class="jing">
        <p>{{message}}</p>
        <keep-alive>
            <jh-component msg="2017年6月9日" v-if="show"></jh-component>
        </keep-alive>
    </div>
</body>
<script>
    var haohao = {
        template: '<div>from haohao: {{msg}}</div>',
        props: ['msg'],
        deactivated: function() {
            console.log('component deactivated!');
        },
        activated: function() {
            console.log('component activated');
        }
    };
    var app = new Vue({
        el: '#app',
        data: function() {
            return {
                message: 'jingjing',
                show: true //控制子组件是否显示
            };
        },
        beforeCreate: function() {
            console.group('beforeCreate Vue实例创建前的状态————————————————————');
            var state = {
                'el': this.$el,
                'data': this.$data,
                'message': this.message
            }
            console.log(state);
        },
        created: function() {
            console.group('created Vue实例创建完毕后状态————————————————————');
            var state = {
                'el': this.$el,
                'data': this.$data,
                'message': this.message
            }
            console.log(state);
        },
        beforeMount: function() {
            console.group('beforeMount 挂载前状态————————————————————');
            var state = {
                'el': this.$el,
                'data': this.$data,
                'message': this.message
            }
            console.log(this.$el);
            console.log(state);
        },
        mounted: function() {
            console.group('mounted 挂载后状态————————————————————');
            var state = {
                'el': this.$el,
                'data': this.$data,
                'message': this.message
            }
            console.log(this.$el);
            console.log(state);
        },
        beforeUpdate: function() {
            console.group('beforeUpdate 更新前状态————————————————————');
            var state = {
                'el': this.$el,
                'data': this.$data,
                'message': this.message
            }
            console.log(this.$el);
            console.log(state);
            console.log('beforeUpdate = ' + document.getElementsByTagName('p')[0].innerHTML);
        },
        updated: function() {
            console.group('updated 更新完成状态————————————————————');
            var state = {
                'el': this.$el,
                'data': this.$data,
                'message': this.message
            }
            console.log(this.$el);
            console.log(state);
            console.log('Updated = ' + document.getElementsByTagName('p')[0].innerHTML);
        },
        beforeDestroy: function() {
            console.group('beforeDestroy 销毁前状态————————————————————');
            var state = {
                'el': this.$el,
                'data': this.$data,
                'message': this.message
            }
            console.log(this.$el);
            console.log(state);
        },
        destroyed: function() {
            console.group('destroyed 销毁完成状态————————————————————');
            var state = {
                'el': this.$el,
                'data': this.$data,
                'message': this.message
            }
            console.log(this.$el);
            console.log(state);
        },
        components: {
            'jh-component': haohao
        }
    });
</script>

<style>
    .jing {
        font-size: 50px;
        font-weight: bolder;
    }
</style>

</html>
```

#### 代码结构不难看懂

创建了一个 **<font face="黑体" color=red size="3">app</font>** 的 Vue 根实例，将其挂载到页面 id 为 app 的 Dom 元素上。
然后局部注册了一个组件名为 **<font face="黑体" color=red size="3">haohao</font>** 并在根实例中将其注册，使其可以在根实例的作用域中使用。
将子组件用 `<keep-alive>` 包裹，为接下来的测试作准备。

关于`<keep-alive>`的问题就不在这里作过多阐述了，大家可以参考以下两篇文章
&nbsp; &nbsp; 1、[https://zhuanlan.zhihu.com/p/96740001](https://zhuanlan.zhihu.com/p/96740001)
&nbsp; &nbsp; 2、[https://www.jianshu.com/p/4b55d312d297](https://www.jianshu.com/p/4b55d312d297)

## OK，到这里我们就可以在谷歌浏览器中打开开发者工具，开始测试了！

---

### 1、beforeCreate 与 created

- `beforeCreate` 执行时：`data`和`el`均未初始化，值为`undefined`
- `created` 执行时：`Vue` 实例观察的数据对象 `data` 已经配置好，已经可以得到`app.message`的值，但 `Vue` 实例使用的根 `DOM` 元素`el `还未初始化

---

### 2、beforeMount 与 mounted 和 activated 与 deactivated

- `beforeMount` 执行时：`data` 和 `el `均已经初始化，但从` {{message}}` 的展示情况可以看出此时 `el` 并没有渲染数据，这里就是应用的 `Virtual DOM`（虚拟 Dom）技术，先把坑占住了。到后面 `mounted` 挂载的时候再把值渲染上去

- `mounted` 执行时：此时 el 已经渲染完成并挂载到实例上
- 我们在控制台看到`component activated`被打印出来了，说明子组件`jh-component` 被 `<keep-alive>` 包裹，随 `el` 的挂载而触发了。
- 然后我们进行一些操作，在控制台输入 `app.show = false`我们再来看看有什么变化，测试结果如下图：

- 怎么样，有没有发现什么？😉😉😉
- 因为我们在这里修改了`data`的值，所以会触发`beforeUpdate`和`updated`钩子函数，这里先不管这两个函数，我们看到 deactivated 钩子已经触发，表示`<keep-alive>`已经停用。

---

### 3、beforeUpdate 和 updated

- 我们继续在控制台输入`app.message = 'haohao'`
- 我们发现`beforeUpdate`和`updated`触发时，`el`中的数据都已经渲染完成，但根据控制台打印的信息`beforeUpdate = jingjing`而`updated = haohao`可知，只有当`updated`钩子被调用时候，组件`dom`才会被更新。

---

### 4、beforeDestroy 与 destroyed

- 在控制台输入`app.$destroy()`就可以将`vue`实例销毁，但是我们发现销毁前和销毁后的实例`dom`结构没有任何改变，其实变化已经发生在了其他地方。
- 作者查了一下官方文档描述：实例销毁后，`Vue`实例指示的所有东西都会解除绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。

- 我们现在做最后一步操作就能证实上述结论。
- 现在在控制台输入`app.message = 'jingjing'`发现结果如下图：

- 我们改变了`data`中的`message`属性，但是 dom 没有任何响应。说明`Vue`实例指示的所有东西都已经解除了绑定。终于写完了 😄😄😄

## 写在最后

---

作者只是一名前端大白(●—●) 此篇文章是第一篇，如果文中有错误请各位大佬谅解一下，指出错误就更好了，让新人多一个学习的机会。😊😊

> 此篇文章写的很浅显，如果有需要对内容有更深入的学习，可以看看大佬[OBKoro](https://juejin.im/user/58714f0eb123db4a2eb95372)写的文章——
> [Vue 的钩子函数[路由导航守卫、keep-alive、生命周期钩子]](https://juejin.im/post/5b41bdef6fb9a04fe63765f1)

---

### 参考文档

[https://cn.vuejs.org/v2/api/#选项-生命周期钩子](https://cn.vuejs.org/v2/api/#%E9%80%89%E9%A1%B9-%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90)
