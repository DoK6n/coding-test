/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
 */

// @lc code=start
// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isBalanced = root => {
  if (!root) return true;
  if (dfs(root) === -1) return false;

  return true;
};

/**@param {TreeNode} node @return {number}*/
const dfs = node => {
  if (!node) return 0;

  let leftDepth = dfs(node.left);
  let rightDepth = dfs(node.right);

  // 왼쪽 하위 트리 또는 오른쪽 하위 트리가 불균형한 경우 -1을 반환
  if (leftDepth === -1 || rightDepth === -1) return -1;
  // 높이가 '1' 이상 차이가 나면 -1을 반환
  if (Math.abs(leftDepth - rightDepth) > 1) return -1;

  // 그렇지 않으면 이 하위 트리의 높이를 max(leftHeight, rightHight) 1...로 반환합니다.
  return Math.max(leftDepth, rightDepth) + 1;
};

// @lc code=end
//
