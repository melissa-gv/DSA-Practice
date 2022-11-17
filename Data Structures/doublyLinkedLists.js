class Node {
  constructor(val) {
    this.val = val
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  print() {
    let result = [];
    let temp = this.head;
    while (temp) {
        result.push(temp.val);
        temp = temp.next;
    }
    console.log(result.join(' <=> '));
};

  push(val) {
    let newNode = new Node(val)
    if (this.length === 0) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++
    return this;
  }

  pop() {
    if (this.length === 0) return undefined
    let poppedNode = this.tail
    if (this.length === 1) {
      this.head = null
      this.tail = null
      this.length = 0
    } else {
      this.tail = poppedNode.prev
      this.tail.next = null
      poppedNode.prev = null
      this.length--
    }
    return poppedNode
  }

  // remove from beginning
  shift() {
    if (this.length === 0) return undefined
    let shifted = this.head
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = shifted.next
      this.head.prev = null
      shifted.next = null
    }
    this.length--
    return shifted
  }

  // add to beginning
  unshift(val) {
    let newHead = new Node(val)
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
    this.head.prev = newHead
    newHead.next = this.head
    this.head = newHead
    }
    this.length++
    return this
  }

  get(index) {
    if (index < 0 || index >= this.length) return null
    let count, current
    if (index <= this.length / 2) {
      count = 0
      current = this.head
      while (count !== index) {
        current = current.next
        count++
      }
    } else if (index > this.length / 2) {
      count = this.length -1
      current = this.tail
      while (count !== index) {
        current = current.prev
        count--
      }
    }
    return current
  }

  set(index, newVal) {
    let found = this.get(index)
    if (found !== null) {
      found.val = newVal
      return true
    }
    return false
  }

  insert(val, index) {
    if (index < 0 || index >= this.length) return false
    if (index === 0) return this.unshift(val)
    if (index === this.length) return this.push(val)

    let newNode = new Node (val)
    let pre = this.get(index - 1)
    let post = pre.next
    pre.next = newNode
    newNode.prev = pre
    newNode.next = post
    post.prev = newNode
    this.length++
    return true
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false
    if (index === 0) return this.shift()
    if (index === this.length - 1) return this.pop()

    let removed = this.get(index)
    removed.prev.next = removed.next
    removed.next.prev = removed.prev

    removed.prev = null
    removed.next = null
    this.length--
    return removed
  }

}

var list = new DoublyLinkedList()
list.push(0)
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)
list.push(6)
list.push(7)
list.push(8)
list.push(9)
list.print(list)
list.remove(5)
list.remove(0)
list.remove(7)
list.print(list)