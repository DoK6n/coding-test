/*
 * @lc app=leetcode id=257 lang=javascript
 *
 * [257] Binary Tree Paths
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
 * @return {string[]}
 */
const binaryTreePaths = root => {
  if (!root) return [];
  else if (!root.left && !root.right) return [`${root.val}`];
  else {
    let left = binaryTreePaths(root.left).map(x => root.val + '->' + x);
    let right = binaryTreePaths(root.right).map(x => root.val + '->' + x);

    return [...left, ...right];
  }
};

// @lc code=end
/**
const leftNodeLv3 = new TreeNode(5);
const leftNodeLv2 = new TreeNode(2, null, leftNodeLv3);
const rightNodeLv2 = new TreeNode(3)
const rootNode = new TreeNode(1, leftNodeLv2, rightNodeLv2);

binaryTreePaths(rootNode);
 *   1
 *  /\
 * 2  3
 * \
 *  5
 *
 * binaryTreePaths([1,2,3,null,5]) - val(1)
 * 
 * 
 *        [L]binaryTreePaths([2,null,5]) - val(2) 
 *    
 *                            [L]binaryTreePaths([null, 5]) - val(null) => return []
 *        left = []
 *                            [R]binaryTreePaths([5]) - val(5) => return ['5']
 *        right = ['5'] => ['2->5'] 
 *    
 *        return [...left, ...right] => ['2->5']
 * 
 * left = [val + '->' + x] => 1 + '->' + '2->5'
 *      = ['1->2->5']
 *    
 * 
 *        [R]binaryTreePaths([3]) - var(3) return => ['3'] 
 *        return [...left, ...right] => ['3']
 * 
 * right = [val + '->' + x] => 1 + '->' + '3'
 *       = ['1->3']
 * 
 * return [...left, ...right] => ['1->2->5', '1->3']
 */
