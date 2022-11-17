// Min Binary Heap
// left child = 2n + 1
// right child = 2n + 2
// parent =  n-1 / 2 (floored)

class Node {
  constructor(val, priority) {
    this.val = val
    this.priority = priority
  }
}

class PriorityQueue {
  constructor() {
    this.values = []
  }

  bubbleUp() {
    let index = this.values.length - 1
    let element = this.values[this.values.length - 1]

    while (index > 0) {
      let parentIdx = Math.floor((index - 1) / 2)
      if (element.priority < this.values[parentIdx].priority) {
        [this.values[index], this.values[parentIdx]] = [this.values[parentIdx], this.values[index]]
        index = parentIdx
      } else {
        break
      }
    }
  }

  enqueue(value, priority) {
    let newNode = new Node (value, priority)

    this.values.push(newNode)
    if (this.values.length === 0) {
      return this
    }

    this.bubbleUp()
    return this
  }

  sinkDown() {
    let element = this.values[0]
    let index = 0

    while (true) {
      let leftIdx = (2 * index) + 1
      let rightIdx = (2 * index) + 2
      let left = this.values[leftIdx]
      let right = this.values[rightIdx]
      let smaller, smallerIdx

      if (!right || left.priority < right.priority) {
        smaller = left
        smallerIdx = leftIdx
      } else {
        smaller = right
        smallerIdx = rightIdx
      }

      if (smaller && element.priority > smaller.priority && smallerIdx < this.values.length) {
        [this.values[index], this.values[smallerIdx]] = [this.values[smallerIdx], this.values[index]]
        index = smallerIdx
      } else {
        break
      }
    }
  }

  dequeue() {
    if (this.values.length === 0) return null

    let min = this.values[0]
    if (this.values.length === 1) {
      this.values.pop()
      return min
    }

    let end = this.values.pop()
    this.values[0] = end
    this.sinkDown()
    return min
  }
}

let pq = new PriorityQueue()
pq.enqueue('low fever', 5)
pq.enqueue('concussion', 2)
pq.enqueue('drunk', 4)
pq.enqueue('exploded head', 1)
pq.enqueue('the flu', 3)
console.log('dequeued:', pq.dequeue())
console.log('after dq',pq.values)
console.log('dequeued:', pq.dequeue())
console.log('after dq',pq.values)
console.log('dequeued:', pq.dequeue())
console.log('after dq',pq.values)
console.log('dequeued:', pq.dequeue())
console.log('after dq',pq.values)
console.log('dequeued:', pq.dequeue())
console.log('after dq',pq.values)
console.log('dequeued:', pq.dequeue())
console.log('after dq',pq.values)
// console.log(pq.values)



