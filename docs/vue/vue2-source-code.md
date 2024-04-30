# vue2 原理源码解析

## Vue.set

### 使用场景

由于 Vue 无法检测到对象属性的添加或删除。而 `Vue` 会在实例初始化时会对 `data` 对象属性执行 `getter/setter` 转化，所以初始化时 `data` 对象中存在数据才为响应式数据。那如果我们想要给对象添加新的属性并更新视图，就需要使用 `Vue.set`。

```js
Vue.set(target, propertyName / index, value);
// 或 vm.$set
// vm为vue实例对象，如大部分.vue文件中，可直接使用 this.$set
```

- `target`： 要添加属性的目标对象或数组，不能是 `Vue` 实例（不允许动态添加根级响应式 property）[见源码](https://github.com/vuejs/vue/blob/ec78fc8b6d03e59da669be1adf4b4b5abf670a34/src/core/observer/index.js#L217)
- `propertyName/index`：新添加的属性名或数组索引
- `value`：添加的值

### 失败场景

- 在使用 `set` 的过程中，有时会出现明明按照 `api` 设置了新属性，但是却没有更新视图的情况。
- 有的时候会感觉到莫名其妙，甚至一度以为是 `Vue` 的 `bug` 。。。
- 如果对 `set` 方法的原理了解清楚了的话，就不会有这种情况了。

- set 相关源码如下：

```js
/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
export function set(target: Array<any> | Object, key: any, val: any): any {
  if (process.env.NODE_ENV !== 'production' && (isUndef(target) || isPrimitive(target))) {
    warn(`Cannot set reactive property on undefined, null, or primitive value: ${(target: any)}`);
  }
  // 判断 target 是否是数组，key 是否是合法的索引
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    // 通过 splice 对key位置的元素进行替换
    // splice 在 array.js 进行了响应化的处理
    target.splice(key, 1, val);
    return val;
  }
  // 如果 key 在对象中已经存在直接赋值
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val;
  }
  // 获取 target 中的 observer 对象
  const ob = (target: any).__ob__;
  // 如果 target 是 vue 实例或者 $data 直接返回
  if (target._isVue || (ob && ob.vmCount)) {
    process.env.NODE_ENV !== 'production' &&
      warn(
        'Avoid adding reactive properties to a Vue instance or its root $data ' +
          'at runtime - declare it upfront in the data option.'
      );
    return val;
  }
  // 如果 ob 不存在，target 不是响应式对象直接赋值
  if (!ob) {
    target[key] = val;
    return val;
  }
  // 把 key 设置为响应式属性
  defineReactive(ob.value, key, val);
  // 发送通知
  ob.dep.notify();
  return val;
}
```

- 为什么会出现 `set` 不更新视图的情况，从源码中我们就看的很清楚了
- 就是因为我们的属性在 `set` 之前已经被赋值了，并且是非响应式方式赋值的。
- 这种赋值通常都是我们非主动、无意识下的赋值。
