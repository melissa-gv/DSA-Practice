class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = []
    } else {
      return 'duplicate vertex'
    }
    return this
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((v) => {
      v !== vertex2
    })

    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((v) => {
      v !== vertex1
    })
  }

  removeVertex(vertex) {
    for (let element of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, element)
    }

    delete this.adjacencyList[vertex]
    return
  }

  DFTRecursive(start) {
    let result = []
    let visited = {}
    const adjacencyList = this.adjacencyList

    function DFTRecurisveHelperFn(vertex) {
      if (!vertex) return

      visited[vertex] = true
      result.push(vertex)


      adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          return DFTRecurisveHelperFn(neighbor)
        }
      })
    }

    DFTRecurisveHelperFn(start)
    return result
  }

  DFTIterative(start) {
    let stack = [start]
    let visited = new Set()
    let result = []
    const adjacencyList = this.adjacencyList
    let currentVertex

    while (stack.length) {
      currentVertex = stack.pop()
      if (!visited.has(currentVertex)) {
        visited.add(currentVertex)
        result.push(currentVertex)
        adjacencyList[currentVertex].forEach(neighbor => {
          stack.push(neighbor)
        })
      }
    }
    return result
  }

  breadthFirst(start) {
    let result = []
    let queue = [start]
    let visited = new Set()
    visited.add(start)
    let currentVertex

    while (queue.length) {
      currentVertex =  queue.shift()
      result.push(currentVertex)

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited.has(neighbor)) {
          visited.add(neighbor)
          queue.push(neighbor)
        }
      })
    }
    return result;

  }
}

let g = new Graph();
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")
console.log(g.DFTRecursive("A")) // [ 'A', 'B', 'D', 'E', 'C', 'F' ]
console.log(g.DFTIterative("A")) // [ 'A', 'C', 'E', 'F', 'D', 'B' ]
console.log(g.breadthFirst("A")) // [ 'A', 'B', 'C', 'D', 'E', 'F' ]




// let g = new Graph()
// g.addVertex("Dallas");
// g.addVertex("Tokyo");
// g.addVertex("Aspen");
// g.addVertex("Los Angeles");
// g.addVertex("Hong Kong")
// g.addEdge("Dallas", "Tokyo");
// g.addEdge("Dallas", "Aspen");
// g.addEdge("Hong Kong", "Tokyo");
// g.addEdge("Hong Kong", "Dallas");
// g.addEdge("Los Angeles", "Hong Kong");
// g.addEdge("Los Angeles", "Aspen");
// console.log(g)
// g.removeVertex('Los Angeles')
// console.log(g)