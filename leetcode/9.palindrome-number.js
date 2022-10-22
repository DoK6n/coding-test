/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = x => x.toString().split('').reduce((acc, cur) => cur + acc) === x.toString();
// @lc code=end