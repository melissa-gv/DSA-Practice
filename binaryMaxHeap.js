// Parent idx   Child idx
//    0             1, 2
//    1             3, 4
//    2             5, 6
//    3             7, 8
//    4             9, 10
//    5             11, 12
// left child = 2n + 1
// right child = 2n + 2
// parent =  n-1 / 2 (floored)

class MaxBinaryHeap {
  constructor() {
    this.values = [55, 39, 41, 18, 27, 12, 33]
  }

  bubbleUp() {
    let index = this.values.length - 1

    while (index > 0) {
      let parentIndex = Math.floor((index - 1)/ 2)
      if (this.values[parentIndex] < this.values[index]) {
        [this.values[index], this.values[parentIndex]] = [this.values[parentIndex], this.values[index]];
        index = parentIndex
      } else {
        return
      }
    }
  }

  insert(val) {
    this.values.push(val)
    this.bubbleUp()
    return this
  }

  extractMax() {
    if (this.values.length === 0) return null

    if (this.values.length === 1) {
      return this.values[0]
    }

    let max = this.values[0]
    let end = this.values.pop()
    this.values[0] = end
    this.sinkDown()
    return max
  }

  sinkDown() {
    let idx = 0
    let element = this.values[0]

    while (true) {
      let leftChildIdx = 2 * idx + 1, rightChildIdx = 2 * idx + 2
      let leftChild = this.values[leftChildIdx], rightChild = this.values[rightChildIdx]
      let biggerChild, biggerChildIdx
      if (leftChild < rightChild) {
        biggerChild = rightChild
        biggerChildIdx = rightChildIdx
      } else {
        biggerChild = leftChild
        biggerChildIdx = leftChildIdx
      }

      if (element < biggerChild && biggerChildIdx < this.values.length) {
        [this.values[idx], this.values[biggerChildIdx]] = [this.values[biggerChildIdx], this.values[idx]]
        idx = biggerChildIdx
      } else {
        break
      }
    }
  }
}

let maxHeap = new MaxBinaryHeap()
console.log(maxHeap.values)
console.log(55, maxHeap.extractMax())
console.log(maxHeap.values)
console.log(41, maxHeap.extractMax())
console.log(maxHeap.values)
console.log(39, maxHeap.extractMax())
console.log(maxHeap.values)
//  [55, 39, 41, 18, 27, 12, 33 ]
//   0   1   2   3   4   5   6

// sinkDown() {
//   let idx = 0
//   let element = this.values[0]

//   while (true) {
//     let leftChildIdx = 2 * idx + 1
//     let rightChildIdx = 2 * idx + 2
//     let leftChild, rightChild
//     let swap = null

//     if (leftChildIdx < this.values.length) {
//       leftChild = this.values[leftChildIdx]
//       if (leftChild > element) {
//         swap = leftChildIdx
//       }
//     }

//     if (rightChildIdx < this.values.length) {
//       rightChild = this.values[rightChildIdx]
//       if (
//         (swap === null && rightChild > element) ||
//         (swap !== null & rightChild > leftChild)
//       )
//         {
//         swap = rightChildIdx
//       }
//     }

//     if (swap === null) break
//     this.values[idx] = this.values[swap]
//     this.values[swap] = element
//     idx = swap
//   }
// }