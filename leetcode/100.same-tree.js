/*
 * @lc app=leetcode id=100 lang=javascript
 *
 * [100] Same Tree
 */

// @lc code=start
//Definition for a binary tree node.

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (!p && !q) return true; // 둘다 없음
  if (!p || !q || p.val !== q.val) return false; // 둘중 하나 없거나 두 값이 다른 경우

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right); // 왼쪽끼리, 오른쪽끼리 비교
};

// @lc code=end
