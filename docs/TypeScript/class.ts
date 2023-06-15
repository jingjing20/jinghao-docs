class Animal {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
  run() {
    return `${this.name} is runing`
  }
}

class Dog extends Animal {
  bark() {
    return `${this.name} is barking`;
  }
}

const dahuang = new Dog('dahuang')
console.log(dahuang.bark());