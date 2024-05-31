# 128. 最长连续序列

## 问题描述：

- 给定一个未排序的整数数组 nums，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

- 请你设计并实现时间复杂度为 O(n) 的算法解决此问题。

```js

示例 1:

输入：nums = [100, 4, 200, 1, 3, 2]
输出：4
解释：最长连续序列是 [1, 2, 3, 4]。它的长度为 4。

示例 2:


输入：nums = [0,3,7,2,5,8,4,6,0,1]
输出：9
```

## 解题思路

要解决这个问题，可以使用哈希表来实现。具体步骤如下：

- 将所有数字插入哈希表中。
- 遍历数组中的每个数字，判断其是否为一个序列的起点（即 `num - 1` 不在哈希表中）。
- 如果是序列起点，则不断查找后续数字 `num + 1, num + 2, ...`，直到该序列结束，记录序列长度。
- 最后返回最长序列的长度。

## 代码

以下是 JavaScript 代码实现：

```javascript
var longestConsecutive = function (nums) {
  if (nums.length === 0) {
    return 0;
  }

  const numSet = new Set(nums);
  let longestStreak = 0;

  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum += 1;
        currentStreak += 1;
      }

      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }

  return longestStreak;
};
```

## 代码解析

1. 将所有数字插入一个哈希集合 `numSet` 中，确保查找操作在 O(1) 时间内完成。
2. 遍历 `numSet` 中的每个数字，判断其是否为一个序列的起点（即 `num - 1` 不在集合中）。
3. 如果是序列起点，则不断查找后续数字并记录序列长度。
4. 更新最长序列长度 `longestStreak`。
5. 返回最长序列的长度。
