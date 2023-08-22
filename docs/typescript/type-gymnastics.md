# 记录用过的、看过的工具类型

## 实现清除类中的函数类型

```ts
// 实现类型谓词函数判断属性是否为函数类型
type IsFunction<T> = T extends (...args: any[]) => any ? true : false;

// 移除类中的函数类型
type RemoveFunctions<T> = {
  [K in keyof T as IsFunction<T[K]> extends true ? never : K]: T[K];
};

// 示例使用
class ExampleClass {
  name: string;
  age: number;
  sayHello() {
    console.log('Hello!');
  }
}

type CleanedExample = RemoveFunctions<ExampleClass>;
// CleanedExample 类型中已经移除了 sayHello 方法
// 结果类型为：{ name: string; age: number; }
```
