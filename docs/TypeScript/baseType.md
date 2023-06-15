---
title: 'ts基本类型'
---
## 基本类型

```js
// boolean 类型
let isDone: boolean = false

// number 类型
let binaryLiteral: number = 0b1010; // 二进制
let octalLiteral: number = 0o744;    // 八进制
let decLiteral: number = 6;    // 十进制
let hexLiteral: number = 0xf00d;    // 十六进制

// string 类型
let firstName: string = 'viking'

// undefined: 用于初始化变量为一个未定义的值。
let u: undefined = undefined

// null: 表示对象值缺失。
let n: null = null

// never: never 是其它类型（包括 null 和 undefined）的子类型，代表从不会出现的值。

// void: 用于标识方法返回值的类型，表示该方法没有返回值。
function hello(): void {
  alert("Hello jingjing");
}

// any类型: 声明为 any 的变量可以赋予任意类型的值。
let notSure: any = 4
notSure = 'maybe it is a string'
notSure = true


// 联合类型: 只能赋予指定的几个类型的值 其他则会报错。
let numberOrString: number | string = 234
numberOrString = 'jingjing'

// 数组类型有两种方式定义
// 1、在元素类型后面加上[]
let arr: number[] = [1, 2];

// 2、或者使用数组泛型
let arr: Array<number> = [1, 2];

// Tuple元组类型：元组类型用来表示已知元素数量和类型的数组，各元素的类型不必相同，对应位置的类型需要相同。
let user: [string, number] = ['viking', 1]
```

## 重要点：
- **1、数组有两种定义方式**
- **2、元组的定义方式**
- **3、null 和 undefined 是除了 never 类型之外的所有类型的子类型**
- **4、never 是所有类型的子类型**
- **5、定义为 any 类型的变量不会有任何提示信息**