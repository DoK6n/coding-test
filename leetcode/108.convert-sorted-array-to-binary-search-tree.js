/*
 * @lc app=leetcode id=108 lang=javascript
 *
 * [108] Convert Sorted Array to Binary Search Tree
 */

// @lc code=start

// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = nums => {
  // 트리의 마지막 노드에 도달
  if (nums.length === 1) return new TreeNode(nums[0]);
  // 존재하지 않는 노드에 도달
  if (nums.length === 0) return null;

  // 배열의 중심 요소
  const centerIndex = Math.floor(nums.length / 2);
  // root 노드
  const root = new TreeNode(nums[centerIndex]);

  // 왼쪽 하위 트리
  const leftSubTree = nums.slice(0, centerIndex);
  root.left = sortedArrayToBST(leftSubTree);
  // 오른쪽 하위 트리
  const rightSubTree = nums.slice(centerIndex + 1, nums.length);
  root.right = sortedArrayToBST(rightSubTree);

  return root;
};
// @lc code=end
/**
 * 정렬된 배열의 Binary Search Tree
 * [ -20, -10,  -3,   0,   5,   9,  27 ]
 *    |    |    |    |    |    |    |
 *    |    |    |    0    |    |    |
 *    |   -10   |         |    9    |
 *  -20        -3         5        27
 */
