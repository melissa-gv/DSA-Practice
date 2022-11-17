class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(value) {
    let newNode = new Node(value)

    if (!this.root) {
      this.root = newNode
    } else {
      let current = this.root
      while (true) {
        if (value < current.value) {
          if (!current.left) {
            current.left = newNode
            return this
          } else {
            current = current.left
          }
        } else if (value > current.value) {
          if (!current.right) {
            current.right = newNode
            return this
          } else {
            current = current.right
          }
        }
      }
    }
    return this
  }

  find(val) {
    if (!this.root) return false

    let current = this.root
    let found = false
    while (current && !found) {
      if (val === current.value) {
        found = true
      } else if (val < current.value) {
        current = current.left
      } else {
        current = current.right
      }
    }
    if (!found) return undefined
    return current
  }

  BFS() {
    let node = this.root
    let data = []
    let queue = []
    if (this.root) queue.push(this.root)

    while (queue.length) {
      node = queue.shift()
      data.push(node.value)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    return data
  }

  DFPreOrder() {
    let data = []
    let current = this.root
    function traverse(node) {
      data.push(node.value)
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
    }

    traverse(current)
    return data;
  }

  DFPostOrder() {
    let data = []
    function traverse(node) {
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      data.push(node.value)
    }

    traverse(this.root)
    return data;
  }

  DFInOrder() {
    let data = []
    function traverse(node) {
      if (node.left) traverse(node.left)
      data.push(node.value)
      if (node.right) traverse(node.right)
    }

    traverse(this.root)
    return data;
  }
}

var tree = new BinarySearchTree()
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)
console.log(tree.DFPreOrder())
console.log(tree.DFPostOrder())
console.log(tree.DFInOrder())