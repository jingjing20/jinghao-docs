---
title: 'class'
---

## class

```js
class Animal {
  name: string;
  static categoies: string[] = ['mammal', 'bird'];
  static isAnimal(a) {
    return a instanceof Animal;
  }
  constructor(name: string) {
    this.name = name;
  }
  run() {
    return `${this.name} is running`;
  }
}

console.log(Animal.categoies);
const snake = new Animal('lily');
console.log(Animal.isAnimal(snake));

class Dog extends Animal {
  bark() {
    return `${this.name} is barking`;
  }
}

const xiaobao = new Dog('xiaobao');

class Cat extends Animal {
  constructor(name) {
    super(name);
    console.log(this.name);
  }
  run() {
    return 'Meow, ' + super.run();
  }
}

const maomao = new Cat('maomao');
```

## 重要点:

- 1、默认修饰符 public(公有的)，**任何实例**都可以调用
- 2、还有 static(静态的)、private(私有的)、protected(保护的)
- 3、设置为 static(静态的)变量或者函数，**不需要实例化就可以直接调用**。
- 4、设为 protected 的变量或者函数**只有自己和子类可用**。
- 5、如果设为 private 的变量或者函数，**只有自己可用，子类也不可用**。
