class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = new TreeNode();
  }

  /**@param {TreeNode} node */
  setRoot(node) {
    this.root = node;
  }

  getRoot() {
    return this.root;
  }

  /**@param {TreeNode} left @param {number} data @param {TreeNode} right */
  makeNode(left, data, right) {
    let node = new TreeNode();
    node.data = data;
    node.left = left;
    node.right = right;
    return node;
  }

  /**
   * Left &rarr; Root &rarr; Right
   * @param {TreeNode} node
   * */
  inorder(node) {
    if (node != null) {
      this.inorder(node.left);
      console.log('', node.data);
      this.inorder(node.right);
    }
  }

  /**
   * Root &rarr; Left &rarr; Right
   * @param {TreeNode} node
   * */
  preorder(node) {
    if (node != null) {
      console.log('', node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }

  /**
   * Left &rarr; Right &rarr; Root
   * @param {TreeNode} node
   * */
  postorder(node) {
    if (node != null) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log('', node.data);
    }
  }
}

/**
 *       (1)
 *      ↙   ↘
 *    (2)   (3)
 *   ↙   ↘
 * (4)  (5)
 * Inorder (Left, Root, Right): 4 2 5 1 3
 * Preorder (Root, Left, Right): 1 2 4 5 3
 * Postorder (Left, Right, Root): 4 5 2 3 1
 */
// tree 생성
const t = new BinarySearchTree();
// 마지막 노드 n4, n5 생성
const n4 = t.makeNode(null, 4, null);
const n5 = t.makeNode(null, 5, null);
// 자식노드 n4, n5를 가지는 n2 생성
const n2 = t.makeNode(n4, 2, n5);
// n3 생성
const n3 = t.makeNode(null, 3, null);
// 자식노드 n2, n3을 가지는 루트노드 n1 생성
const n1 = t.makeNode(n2, 1, n3);

// tree에 루트노드 setting
t.setRoot(n1);
console.log('┏━━┓ inorder ');
t.inorder(t.getRoot());
console.log('┗━━┛');
console.log('┏━━┓ preorder');
t.preorder(t.getRoot());
console.log('┗━━┛');
console.log('┏━━┓ postorder');
t.postorder(t.getRoot());
console.log('┗━━┛');
console.log('┏━ getRootNode ━┓');
console.log(t.getRoot());
console.log('┗━━━━━━━━━━━━━━┛');
