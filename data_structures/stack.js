class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Stack {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  push(val) {
    var newNode = new Node(val)
    if (this.size === 0) {
      this.first = newNode
      this.last = newNode
    } else {
      let temp = this.first
      this.first = newNode
      newNode.next = temp
    }
    return ++this.size
  }

  pop() {
    if (this.size === 0) return null

    let temp = this.first
    if (this.size === 1) {
      this.last = null
    }
    this.first = this.first.next
    this.size--;
    return temp.value
  }
}

let stack = new Stack()
stack.push(1)
stack.push(2)
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
