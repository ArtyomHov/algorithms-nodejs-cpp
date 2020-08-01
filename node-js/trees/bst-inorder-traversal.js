const { Node, Tree } = require('./is-bst')

const inorderTraversal = (root) => {
  let current = root
  let solution = []
  while (current) {
    let guide = current.left

    if (current.left !== null) {
      while (guide.right && guide.right !== current) {
        guide = guide.right
      }
      if (guide.right === null) {
        guide.right = current
        current = current.left
      } else {
        guide.right = null
        solution.push(current.data)
        current = current.right
      }
    } else {
      solution.push(current.data)
      current = current.right
    }
  }
  return solution
}

const t = new Node(10)
t.left = new Node(8)
t.left.left = new Node(7)
t.left.right = new Node(9)
t.right = new Node(12)
const t1 = new Tree()
t1.root = t

console.log(inorderTraversal(t))
