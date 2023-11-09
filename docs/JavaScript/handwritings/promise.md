# promise

## 实现一个 promise.all

- 1、判断入参是否合法
- 2、 函数返回值为 `<Promise>` 对象, 当参数 `promises` 内所有的 `Promise` 执行成功时，该 `<Promise>` 对象执行成功，resolve 数据为所有成功的 `Promise` 结果数组。
- 3、当有一个 `<Promise>` 执行不成功, 则该 `<Promise>` 不成功, reject 第一个不成功的 `<Promise>` 的 err 数据

```js
Promise._all = (promises) => {
  // 该方法返回一个promise对象
  return new Promise((resolve, reject) => {
    // 该方法的参数需为一个可迭代对象
    if (promises === null || typeof promises[Symbol.iterator] !== 'function') {
      throw new TypeError(`${promises} is not a iterable`);
    }

    promises = [...promises];
    // 可迭代对象为空则 resolve 一个 []
    if (promises.length === 0) {
      resolve([]);
    }

    let result = [];
    let count = 0;
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((res) => {
          result[index] = res;
          count++;
          if (count === promises.length) {
            resolve(result);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};
```

## 实现一个 promise.race

```js
Promise._race = function (promises) {
  // 该方法的参数需为一个可迭代对象
  if (promises === null || typeof promises[Symbol.iterator] !== 'function') {
    throw new TypeError(`${promises} is not a iterable`);
  }

  promises = [...promises];

  return new Promise((resolve, reject) => {
    promises.forEach((item) => {
      Promise.resolve(item)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

let p1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(1);
  }, 51);
});
let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(2);
  }, 51);
});
let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3);
  }, 50);
});

Promise._race([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
```

## 实现一个交通灯

```js
// 实现一个交通灯
function red() {
  console.log('red');
}

function green() {
  console.log('green');
}

function yellow() {
  console.log('yellow');
}

const task = (light, time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (light === 'red') {
        resolve(red());
      } else if (light === 'green') {
        resolve(green());
      } else {
        resolve(yellow());
      }
    }, time);
  });
};

const taskRunner = async () => {
  await task('red', 5000);
  await task('green', 5000);
  await task('yellow', 2000);
  taskRunner();
};

taskRunner();
```
