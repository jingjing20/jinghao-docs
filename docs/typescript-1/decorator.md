# 装饰器

## 装饰器初尝

- 装饰器为我们在类的声明及成员上添加标注提供了一种方式。 `Javascript` 里的装饰器目前处在 建议征集的第二阶段，但在 `TypeScript` 里已做为一项实验性特性予以支持。

- 装饰器是一种特殊类型的声明，它能够被附加到类声明，方法， 访问符，属性或参数上。装饰器使用 `@expression` 这种形式 `expression` 求值后必须为一个函数，该函数会在运行时被调用（不管类是否实例化都会第一时间调用），被装饰者的信息（根据被装饰着不同而略有不同）将做为参数传入 `expression` 求值后的函数中。

- 正所谓百闻不如一见，不再赘述装饰器的概念，而是直接写一个装饰器来感受一下。

```ts
// 类装饰器使用！！！这里被装饰者是类Example
@classDecor
class Example {
  // 这里为了this.text不报错，声明了所有属性都为合法属性
  [x: string]: any;

  print() {
    console.log(this.text);
  }
}

// 类装饰器声明！！！可以看到被装饰者的信息作为参数传入了，这里类装饰器的参数是被装饰类的构造函数
function classDecor(constructor: Function) {
  console.log('ClassDecor is called');
  constructor.prototype.text = 'Class is decorated';
}

console.log('New Example instance');
new Example().print();

// 输出什么？Bingo！
// ClassDecor is called
// New Example instance
// Class is decorated
```

::: info 代码解析

- 这里我们定义了一个名为 `classDecor` 的函数，该函数被`@`符号修饰并放置在 `Example` 类之前做为一个典型的类装饰器使用。
- 在代码的最后，我们通过调用 `new Example` 生成一个 `Example` 实例并调用其上的 `print` 方法。
- 可以看到由于 `classDecor` 类装饰器的存在，实例化后的 `print` 中访问到了 `text` 这个并未在 `Example` 类中定义的属性并成功打印了它的值 `Class is decorated`。
- 另外，由于类装饰器会在程序运行的第一时间被调用，因此 `ClassDecor is called` 会先于 `New Example instance` 被打印出来，也正是因为这个原因我们无法将 `text` 属性挂载在 `Example` 实例上（运行 `classDecor` 时还不存在该实例），取而代之我们将其挂载载了其原型链上。

:::
