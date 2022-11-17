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
}

let graph = new WeightedGraph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addEdge('A', 'B', 9)
graph.addEdge('B', 'C', 7)
console.log(graph.adjacencyList)
