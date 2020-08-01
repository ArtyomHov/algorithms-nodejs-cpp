class Node {
  constructor (data, left = null, right = null) {
    this.data = data
    this.right = right
    this.left = left
  }
}

class Tree {
  constructor () {
    this.root = null
  }
  isValidBST (node, min = null, max = null) {
    if (!node) {
      return true
    }
    if (max !== null && node.data >= max) {
      return false
    }
    if (min !== null && node.data <= min) {
      return false
    }
    const leftSide = this.isValidBST(node.left, min, node.data)
    const rightSide = this.isValidBST(node.right, node.data, max)
    return leftSide && rightSide
  }
}

module.exports = {
  Node,
  Tree
}

const t = new Node(10)
t.left = new Node(8)
t.left.left = new Node(7)
t.left.right = new Node(9)
t.right = new Node(12)
const t1 = new Tree()
t1.root = t
console.log(t1.isValidBST(t))
