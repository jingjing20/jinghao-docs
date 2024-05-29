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

::: info 📢

在第 27 行使用 `Promise.resolve(promise)` 将每一个 `promise` 包装一层是为了确保无论传入的是一个已经是 `Promise` 的对象，还是一个普通值，都可以以 `Promise` 的方式进行处理。这么做有以下几个原因：

1. **统一处理传入的值**：`Promise.all` 接受的参数可以是一个 `Promise` 对象的可迭代对象，但也可以是其他普通值（非 `Promise` 对象）。通过 `Promise.resolve(promise)`，可以将普通值转化为一个已解决的 `Promise`，这样统一处理非常方便。

2. **保证接口的一致性**：如果直接使用传入的值，不做处理，那么在处理过程中就需要分开处理 `Promise` 和普通值两种情况，这样代码会变得复杂和冗长。使用 `Promise.resolve(promise)` 可以将所有传入值都转化为 `Promise`，这样后续的 `then` 和 `catch` 方法调用就可以直接使用，而不用区分是否是 `Promise`。

3. **处理非 `Promise` 值**：假设传入的可迭代对象中包含普通值，例如 `[Promise.resolve(1), 2, Promise.resolve(3)]`，如果不使用 `Promise.resolve(promise)`，直接处理这些值会导致普通值不会触发 `then` 方法，也就无法加入到结果数组中。因此，使用 `Promise.resolve(promise)` 能确保每个元素都能正确处理并加入结果数组。

通过这一层包装，可以确保代码在处理每一个 `promise` 或普通值时，都能按预期进行，保证 `Promise.all` 的正确性和一致性。

总结一下，使用 `Promise.resolve(promise)` 的主要目的是为了将所有传入的参数统一转化为 `Promise` 对象，这样可以简化代码逻辑，确保后续处理的一致性和正确性。

:::

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
