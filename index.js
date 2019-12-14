class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

const isBalanced = (root) => {
  if (!root) return false

  const height = calculateHeight(root)

  return height !== Number.MIN_VALUE
}

const calculateHeight = (root, height = 0) => {
  if (!root) return height

  const leftHeight = calculateHeight(root.left, height + 1)
  if (leftHeight === Number.MIN_VALUE) return leftHeight

  const rightHeight = calculateHeight(root.right, height + 1)
  if (rightHeight === Number.MIN_VALUE) return rightHeight

  if (Math.abs(leftHeight - rightHeight) > 1) return Number.MIN_VALUE

  return Math.max(leftHeight, rightHeight)
}

const root = new Node(4)
root.left = new Node(2)
root.right = new Node(6)

root.left.left = new Node(1)
root.left.right = new Node(3)

root.right.left = new Node(5)
root.right.right = new Node(7)

root.right.right.right = new Node(99)
// root.right.right.right.right = new Node(101)

isBalanced(root)