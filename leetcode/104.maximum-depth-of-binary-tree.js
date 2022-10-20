/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
 */

// @lc code=start

// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @typedef {function} TreeNode
 * @property {this.val} val
 *
 *
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  let depth = 0;

  const dfs = (node, lv) => {
    // 자식 노드가 더 이상 없는 레벨까지 탐색한 경우
    if (!node) {
      // 트리의 마지막 노드의 레벨과 최근 탐색했던 마지막 노드의 레벨 중 최대값 할당
      // lv - 1인 이유는 마지막 노드의 left와 right가 호출된 상태이기 때문에
      depth = Math.max(lv - 1, depth);
      return;
    }
    dfs(node.left, lv + 1); // 왼쪽 노드 탐색 -> 탐색시마다 2번째 인자에 레벨 1 증가
    dfs(node.right, lv + 1);
  };

  dfs(root, 1);

  return depth;
};

// @lc code=end
/**
 * 깊이우선탐색
 */
