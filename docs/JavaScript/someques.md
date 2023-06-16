# JavaScript 100 题:blush:

## 1、写出下列程序结果（词法）

```javascript
function Foo() {
  getName = function () {
    alert(1);
  };
  return this;
}
Foo.getName = function () {
  alert(2);
};
Foo.prototype.getName = function () {
  alert(3);
};
var getName = function () {
  alert(4);
};
function getName() {
  alert(5);
}

// 写出下面结果
Foo.getName();
getName();
Foo().getName();
getName();
new Foo.getName();
new Foo().getName();
new new Foo().getName();
```

::: danger 提示
在正式做之前，我们得清楚几个概念：
:::

- 函数提升要比`var`声明提升更加高，也就是说：如果在代码中同时定义了相同名称的一个函数和一个变量，是先会执行`function getName() {}`，再执行`var getName = function () {}`的。
- 关于`new`和`.`以及`()`优先级的问题，不带参数的`new`调用优先级是要小于`.`的，而`()`的优先级是最大的

首先是初始化阶段：

- `function getName() {} `和`function Foo() {}`被提升到作用域最顶层(但是此时还没有调用`Foo`函数，所以它里面的内容不会被执行)
- 随后，`var getName`也被提升到了作用域最顶层，发现有一个和它同名的`getName`，后来者覆盖了它，所以此时的`getName`变成了`alert(4)`

然后到了调用阶段：

- 1. 首先调用的是`Foo.getName()`，由于`Foo`是一个构造函数，且之前定义了它的静态方法`Foo.getName = alert(2)`，因此显示调用整个静态方法，弹出`2`

- 2. 之后调用了`window` 下的`getName()`，在初始化阶段已经说了，这时候的`getName`是`alert(4)`，所以弹出`4`

- 3. 接着执行`Foo().getName()`，这里可以分为两步来看，第一步：调用`Foo()`方法，这时候可以执行里面的代码了，也就是`getName = alert(1)`，但是在`Foo()`函数内没有`getName`，所以此时 JS 就向外查找，找到了 window 下的那个`getName`(也就是`alert(4)`)，找到了之后把它改为了`alert(1)`，记住这时候的 window 下的`getName`就变成了`alert(1)`，不过还没有结束，然后返回了`this`，这时候我们知道`this`表示的是`window`(因为调用`Foo()`函数的是`windwo`)；第二步：执行`Foo().getName()`，刚刚`Foo()`的返回值我们已经知道了，是`window`，所以相当于调用了`window.getName()`，而在第一步中已经将`getName`变成了`alert(1)`，所以这时候会弹出`1`

- 4. 然后是调用`getName()`，这时候我们已经知道`getName`是`alert(1)`，所以会再次弹出`1`

- 5. 执行`new Foo.getName()`，在开头我已经提到了，不带参数的`new`调用优先级是要小于`.`的，所以这里相当于是`new (Foo.getName)()`，并且这里我们不要管`new`的产生结果，因为题目没有要你打印出它的结果，我们只需要关心`new`后面的东西就了，所以也就是关心`Foo.getName()`，额，这又是调用`Foo`构造函数的静态方法，和第一个弹出的一样，弹出`2`
- 6. 同理，因为`()`的优先级是最大的，所以执行`new Foo().getName()`相当于是执行了`(new Foo()).getName()`，也就是先产生了一个`Foo`的实例，我假设它是`{}`，也就是执行`{}.getName()`，但是这个空对象它自己没有`getName()`方法呀，所以它就用原型链上的`getName`，也就是弹出`3`
- 7. 最后一个其实和第六个差不多，转换为伪代码就是`new (new Foo()).getName()`，也是弹出了`3`。

::: tip 温馨提醒
答案在下面，可以自己先尝试想想看哦。
:::

::: details 答案
2 4 1 1 2 3 3
:::

---

## 2、写出下列程序结果（堆地址和栈地址）

```javascript
function test(person) {
  person.age = 26;
  person = {
    name: 'hzj',
    age: 18
  };
  return person;
}
const p1 = {
  name: 'fyq',
  age: 19
};
const p2 = test(p1);
console.log(p1); // -> ?
console.log(p2); // -> ?
```

::: tip 温馨提醒
答案在下面，可以自己先尝试想想看哦。
:::

::: details 答案 解析

```js
p1：{name: “fyq”, age: 26}
p2：{name: “hzj”, age: 18}
```

原因: 在函数传参的时候传递的是对象在堆中的内存地址值，test 函数中的实参 person 是 p1 对象的内存地址，通过调用 person.age = 26 确实改变了 p1 的值，但随后 person 变成了另一块内存空间的地址，并且在最后将这另外一份内存空间的地址返回，赋值给了 p2。
:::
