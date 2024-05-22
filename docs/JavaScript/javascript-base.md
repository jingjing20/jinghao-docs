# JS 基础知识总结

## 一、原始数据类型

- boolean
- string
- number
- null
- undefined
- bigint (提案中)
- symbol (ES6 引入表示独一无二的值)

## 二、引用数据类型(对象 Object)

- 普通对象 Object
- 数组对象 Array
- 正则对象 RegExp
- 日期对象 Date
- 数学函数 Math
- 函数对象 Function

## 三、为什么 typeof(null) 结果是 object？

解释: 虽然 typeof null 会输出 object，但是这只是 JS 存在的一个悠久 Bug。**_在 JS 的最初版本中使用的是 32 位系统，为了性能考虑_** 使用低位存储变量的类型信息， **_000 开头代表是对象_** 然而 null 表示为全零，所以将它错误的判断为 object 。

::: tip 面试题
用 `typeof(jing) === 'object'` 来判断 `jing` 是不是 `object` 有没有风险？为什么？
:::

## 四、js 隐式类型转换

JavaScript 提供三种不同的值比较操作：

- 严格相等 ("triple equals" 或 "identity")，使用 === ,
- 宽松相等 ("double equals") ，使用 ==
- 以及 Object.is （ECMAScript 2015/ ES6 新特性）

::: danger 注意注意
Object.is（NaN，NaN）将为 true
:::

### 隐式类型转换规则

- 如果有一个操作数是布尔值，则在比较相等性之前先将其转换为数值 `false` 转换为 0，而 `true` 转换为 1。
- 如果一个操作数是字符串，另一个操作数是数值，在比较相等性之前先将字符串转换为数值。
- 如果一个操作数是对象，另一个操作数不是，则调用对象的 `valueOf()` 方法，用得到的基本类型值按照前面的规则进行比较。

**这两个操作符在进行比较时则要遵循下列规则。**

- `null` 和 `undefined` 是相等的
- 要比较相等性之前，不能将 `null` 和 `undefined` 转换成其他任何值
- 如果有一个操作数是 `NaN`，则相等操作符返回 `false` ，而不相等操作符返回 `true`。
- **重要提示：** 即使两个操作数都是 `NaN`，相等操作符也返回 `false` 了；因为按照规则， `NaN` 不等于 `NaN`。
- 如果两个操作数都是对象，则比较它们是不是同一个对象，如果两个操作数都指向同一个对象，则相等操作符返回 `true` ，否则返回 false

::: danger 注意点
false、0、空字符串（""）、NaN、null 和 undefined 被转换为 false
所有其他值被转换为 true
:::

### 题目

**1、[] == ! [] 的结果为什么会是 true**

①、根据运算符优先级 ，！ 的优先级是大于 == 的，所以先会执行 ![]

**_！可将变量转换成 boolean 类型，null、undefined、NaN 以及空字符串('')取反都为 true，其余都为 false。_**

所以 ! [] 运算后的结果就是 false

也就是 [] == ! [] 相当于 [] == false

②、根据上面提到的规则（如果有一个操作数是布尔值，则在比较相等性之前先将其转换为数值——false 转换为 0，而 true 转换为 1），则需要把 false 转成 0

也就是 [] == ! [] 相当于 [] == false 相当于 [] == 0

③、根据上面提到的规则（如果一个操作数是对象，另一个操作数不是，则调用对象的 valueOf()方法，用得到的基本类型值按照前面的规则进行比较，如果对象没有 valueOf()方法，则调用 toString()）

而对于空数组，[].toString() -> '' (返回的是空字符串)

也就是 [] == 0 相当于 '' == 0

④、根据上面提到的规则（如果一个操作数是字符串，另一个操作数是数值，在比较相等性之前先将字符串转换为数值）

Number('') -> 返回的是 0

相当于 0 == 0 自然就返回 true 了

**2、null === null**


## 五、null 和 undefined 的区别

- `null` 表示一个 `"无"` 的对象，也就是该处不应该有值；而 `undefined` 表示未定义。
- 在转换为数字时结果不同，`Number(null)` 为 0，而 `undefined` 为 `NaN`。

使用场景上：

`null：`

- 作为函数的参数，表示该函数的参数不是对象。
- 作为对象原型链的终点。

`undefined:`

- 变量被声明了，但没有赋值时，就等于 undefined。
- 对象没有赋值属性，该属性的值为 undefined。
- 函数没有返回值时，默认返回 undefined。

## 六、0.1 + 0.2 === 0.3?

- JavaScript 的 Number 类型使用的是双精度浮点型。
- 在 JS 中 0.1 和 0.2 都是偏大的，所以 0.1 + 0.2 > 0.3。

### 解决办法：

**toFixed**

在 `JavaScript` 原生方法中提供了一个方法：`Number.prototype.toFixed()`
`toFixed()` 方法使用定点表示法来格式化一个数
语法如下：

`numObj.toFixed(digits)`

其中参数 `digits` 是小数点后数字的个数：介于 0 到 20 之间。
返回的是一个数值的字符串形式，所以需要将结果强制转换为浮点型。

```js
parseFloat((0.1 + 0.2).toFixed(10)); //结果为0.3
parseFloat((0.3 / 0.1).toFixed(10)); // 结果为 3
parseFloat((0.7 * 180).toFixed(10)); //结果为126
parseFloat((1.0 - 0.9).toFixed(10)); // 结果为 0.1
parseFloat((9.7 * 100).toFixed(10)); // 结果为 970
parseFloat((2.22 + 0.1).toFixed(10)); // 结果为 2.32
```

### 总结

计算机中使用 IEEE754 标准实现的浮点型存储都会有这个问题：

用二进制来存储小数，而大部分小数转成二进制之后都是无限循环的值，因此存在取舍问题，也就是精度丢失。
从而使得 0.1 + 0.2 !== 0.3。


## 七、Object.assign()详解

### Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象，返回的是目标对象。

- 如果目标对象中的属性具有相同的键，则属性将被源对象中的属性覆盖。后面的源对象的属性将类似地覆盖前面的源对象的属性。

::: danger 注意
Object.assign 不会在那些 source 对象值为 null 或 undefined 的时候抛出错误。
:::

### 拷贝问题

- Object.assign() 不是深拷贝。因为 Object.assign() 拷贝的是（可枚举）属性值。

- 假如源对象中的某个值是一个对象的引用，它仅仅会复制它的引用值。

- 原始类型会被包装为对象

```js
const v1 = 'abc';
const v2 = true;
const v3 = 10;
const v4 = Symbol('foo');

const obj = Object.assign({}, v1, null, v2, undefined, v3, v4);
// 原始类型会被包装，null 和 undefined 会被忽略。
// 注意，只有字符串的包装对象才可能有自身可枚举属性。
console.log(obj); // { "0": "a", "1": "b", "2": "c" }
```

在这段代码中，`Object.assign` 方法用于将一个或多个源对象的所有可枚举属性复制到目标对象。其语法如下：
```javascript
Object.assign(target, ...sources)
```
其中，`target` 是目标对象，`sources` 是一个或多个源对象。

在这段代码中，目标对象是一个空对象 `{}`，而源对象是 `v1`, `null`, `v2`, `undefined`, `v3`, 和 `v4`。我们需要了解这些源对象是如何处理的：

1. **`v1 = 'abc'`**
   - JavaScript 中的字符串是原始类型，没有可枚举属性。但是，字符串在一些特定情况下会被临时包装为对象。这种临时包装的对象具有类似数组的索引属性（从 `0` 开始），其属性值为字符串的字符。
   - 因此，当字符串 `v1` 被传递给 `Object.assign` 时，它会被包装成一个临时的 String 对象，具有如下可枚举属性：
     ```javascript
     {
       "0": "a",
       "1": "b",
       "2": "c"
     }
     ```

2. **`null` 和 `undefined`**
   - 这两个值在 JavaScript 中是被忽略的。当 `null` 或 `undefined` 被传递给 `Object.assign` 时，它们不会产生任何影响，不会向目标对象添加任何属性。

3. **`v2 = true`**
   - 布尔值也是原始类型，没有可枚举属性。布尔值在传递给 `Object.assign` 时不会向目标对象添加任何属性。

4. **`v3 = 10`**
   - 数值类型也是原始类型，没有可枚举属性。数值在传递给 `Object.assign` 时不会向目标对象添加任何属性。

5. **`v4 = Symbol('foo')`**
   - Symbol 类型也是原始类型，没有可枚举属性。Symbol 在传递给 `Object.assign` 时不会向目标对象添加任何属性。

结合以上分析，当这些源对象传递给 `Object.assign` 时，只有字符串 `v1` 的临时包装对象会向目标对象添加属性，而其他原始类型、`null` 和 `undefined` 都不会影响目标对象。因此，最终的 `obj` 只包含 `v1` 的属性：

```javascript
const obj = Object.assign({}, v1, null, v2, undefined, v3, v4);
// 结果是:
console.log(obj); // { "0": "a", "1": "b", "2": "c" }
```

这个结果表示 `obj` 对象拥有来自 `v1` 字符串的三个属性：键为 "0"、"1" 和 "2"，对应的值分别是 "a"、"b" 和 "c"。

## Math.random 的安全风险

[见张鑫旭大佬文章](https://www.zhangxinxu.com/wordpress/2021/12/js-getrandomvalue-math-random/)