class Node {
  constructor (val) {
    this.val = val
    this.next = null
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  // adds to tail
  push(val) {
    let node = new Node(val)
    if (this.length === 0) { // can also be -> if (!this.head)
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      this.tail = node
    }
    this.length++
    return this
  }

  traverse() {
    let current = this.head
    console.log('start of linked list')
    while (current !== null) {
      console.log(current.val)
      current = current.next
    }
    return 'end of linked list'
  }

  // removes the tail
  pop() {
    if (!this.head) return undefined;

    if (this.length === 1) {
      let temp = this.head
      this.head = null
      this.tail = null
      this.length = 0
      return temp
    }

    let curNode = this.head
    while (curNode.next !== this.tail) {
      curNode = curNode.next
    }
    let oldTail = this.tail
    this.tail = curNode
    this.tail.next = null
    this.length--
    return oldTail
  }

  //removes from beginning
  shift() {
    if (this.length === 0) return undefined

    let oldHead = this.head
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = oldHead.next
    }
    this.length--
    return oldHead
  }

  // add to beginning
  unshift(val) {
    let newHead = new Node(val)

    if (this.length === 0) {
      this.head = newHead
      this.tail = this.head
    } else {
      newHead.next = this.head
      this.head = newHead
    }
    this.length++
    return this
  }

  // find element at index
  get(idx) {
    if (this.length <= 0 || idx >= this.length) return null

    let current = this.head
    let count = 0
    while (count !== idx) {
      current = current.next
      count++
    }
    return current
  }

  // overwrites node at specified index
  set(newVal, idx) {
    let foundNode = this.get(idx)
    if (foundNode) {
      foundNode.val = newVal
      return this
    }
    return false
  }

  insert(idx, newVal) {
    if (this.length <= 0 || idx > this.length) return false

    if (idx === this.length) {
      this.push(newVal)
      this.length++
      return true
    }

    if (idx === 0) {
      this.unshift(newVal)
      this.length++
      return true
    }

    let newNode = new Node(newVal)
    let prev = this.get(idx - 1)
    let aft = this.get(idx)
    prev.next = newNode
    newNode.next = aft
    this.length++
    return true
  }

  remove(idx) {
    // if empty
    if (this.length < 0 || idx >= this.length) return undefined

    // delete head
    if (idx === 0) {
      return this.shift();
    }

    // delete tail
    if (idx === this.length - 1) {
      return this.pop()
    }

    let prev = this.get(idx - 1)
    let deleted = this.get(idx)
    prev.next = deleted.next
    deleted.next = null
    this.length--
    return deleted
  }

  reverse() {
    let current = this.head
    this.head = this.tail
    this.tail = current

    let next
    let prev = null
    while (current) {
      next = current.next
      current.next = prev
      prev = current
      current = next
    }
    return this
  }

}

var list = new SingleLinkedList()
list.push(1)
list.push(2)
list.push(3)
list.insert(1, 1.5)
list.reverse()
console.log(list.traverse())