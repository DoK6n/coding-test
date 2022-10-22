/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};
// Runtime: 135 ms ~ 182 ms
// Memory Usage: 42.1 MB

// var twoSum = function (nums, target) {
//   let map = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     if (map.has(target - nums[i])) {
//       return [map.get(target - nums[i]), i];
//     } else {
//       map.set(nums[i], i);
//     }
//   }
//   return [];
// };
// Runtime: 83 ms
// Memory Usage: 43.2 MB
  /** [2,7,11,15], 9
   *    Map.has(9 - 2)
   *    => false => set Map(1) {2 => 0}
   *    Map.has(9 - 7)
   *    => true => [map.get(2) => 0, 1]
   */


// @lc code=end