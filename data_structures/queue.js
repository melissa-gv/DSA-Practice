class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  // add to end (tail)
  enqueue(val) {
    var newNode = new Node(val)
    if (this.size === 0) {
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode
    }
    return ++this.size
  }

  // remove from beginning (head) so you don't iterate through list
  dequeue() {
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

let queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
