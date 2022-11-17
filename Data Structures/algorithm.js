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

class WeightedGraph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
  }

  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({node: v2, weight});
    this.adjacencyList[v2].push({node: v1, weight});
  }

  Dijkstra (start, finish) {
    const nodes = new PriorityQueue()
    const distances = {}
    const previous = {}
    let smallest
    let path = []

    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0
        nodes.enqueue(vertex, 0)
      } else {
        distances[vertex] = Infinity
        nodes.enqueue(vertex, Infinity)
      }
      previous[vertex] = null
    }
    while (nodes.values.length) {
      smallest = nodes.dequeue().val
      if (smallest === finish) {
        while(previous[smallest]) {
          path.unshift(smallest)
          smallest = previous[smallest]
        }
        break
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          let nextNode = this.adjacencyList[smallest][neighbor]
          let candidate = distances[smallest] + nextNode.weight
          let nextNeighbor = nextNode.node
          if (candidate < distances[nextNeighbor]) {
            distances[nextNeighbor] = candidate
            previous[nextNeighbor] = smallest
            nodes.enqueue(nextNeighbor, candidate)
          }
        }
      }

    }
    path.unshift(smallest)
    return path
  }
}




var graph = new WeightedGraph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);

console.log(graph.Dijkstra("A", "E"))
[ 'A', 'C', 'D', 'F', 'E' ]
