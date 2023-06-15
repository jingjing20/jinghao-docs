---
title: 'Vue基础'
---

# 指令
## v-html
- 使用 `v-html` 后，将会覆盖子元素
- 还会有 `XSS` 风险

## computed 和 watch
- `computed` 有缓存，`data` 如果不变不会重新计算
- watch 怎么深度监听？
```js
deep: true // 深度监听
```
- watch 监听引用类型的时候是拿不到它的 oldVal 的
- 实例如下：
```js
<template>
  <div>
    <input v-model="name" />
    <input v-model="info.city" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "王志浩",
      info: {
        city: "永新"
      }
    };
  },
  watch: {
    name(oldVal, val) {
      console.log("watch name", oldVal, val); // 值类型，可正常拿到 oldVal 和 val
    },
    info: {
      handler(oldVal, val) {
        console.log("watch info", oldVal, val); // 引用类型，拿不到 oldVal 。因为指针相同，此时已经指向了新的 val
      },
      deep: true // 深度监听
    }
  }
};
</script>
```

## style 和 class
- 使用动态属性
- 使用驼峰式写法
```js
<template>
  <div>
    <p :class="{ black: isBlack, green: isgreen }">使用 class</p>
    <p :class="[black, green]">使用 class （数组）</p>
    <p :style="styleData">使用 style</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isBlack: true,
      isgreen: true,

      black: "black",
      green: "green",

      styleData: {
        fontSize: "40px", // 转换为驼峰式
        color: "red",
        backgroundColor: "#ccc" // 转换为驼峰式
      }
    };
  }
};
</script>
<style scoped>
.black {
  background-color: #999;
}
.green {
  color: green;
}
</style>
```
::: tip 提示
写style的时候，一定记得用驼峰式写法，不然样式不会生效！可以自己试验一波！
:::

## 条件渲染
### v-if 与 v-else
- 可以使用变量
- 也可以使用 === 表达式

### v-if 与 v-show
**区别如下**
- v-if： 如果 v-if 的条件不成立 后面的 DOM 节点不会渲染到页面上
- v-show: 而如果 v-show 的条件不成立，后面的 DOM 节点还是会渲染到页面上，只不过用 display:none 隐藏了而已。

```js
<template>
  <div>
    <p v-if="type === 'a'">A</p>
    <p v-else-if="type === 'b'">B</p>
    <p v-else>other</p>

    <p v-show="type === 'a'">A by v-show</p>
    <p v-show="type === 'b'">B by v-show</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
        type: 'a'
    }
  }
}
</script>
```

![mark](http://image.jinghao.xyz/blog/20200422/8phmScApUKSk.png)
![mark](http://image.jinghao.xyz/blog/20200422/mvj4kgDNQKaJ.jpg)  

::: tip 提示
如果状态更新不是很频繁就用 v-if 反之 v-show。
:::

## 循环(列表)渲染
- key 的重要性，key不能乱写。
- v-if 和 v-for 建议不要一起用（不能放在同一DOM节点上）
- v-for 优先级比 v-if 高一些（放在一起浪费计算过程消耗的时间）
