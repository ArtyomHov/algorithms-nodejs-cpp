
const PriorityQueue = require('../data-structures/priority-queue')
const Graph = require('./graph')

const dijkstrasAlgorithm = (graph, startNode) => {
  const distances = {}
  const prev = {}
  const pq = new PriorityQueue()
  distances[startNode] = 0
  pq.enqueue(startNode, 0)
  graph.getAllVertices().forEach((node) => {
    if (node !== startNode) {
      distances[node] = Infinity
    }
    prev[node] = null
  })

  while (!pq.isEmpty) {
    let minNode = pq.dequeue()
    let currNode = minNode.element
    graph.getNeighbors(currNode).forEach(neighbor => {
      let alt = distances[currNode] + neighbor.weight
      if (alt < distances[neighbor.node]) {
        distances[neighbor.node] = alt
        prev[neighbor.node] = currNode
        pq.enqueue(neighbor.node, distances[neighbor.node])
      }
    })
  }
  return distances
}

module.exports = dijkstrasAlgorithm

let g = new Graph()
g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')
g.addVertex('G')

g.addDirectedWeightedEdge('A', 'C', 100)
g.addDirectedWeightedEdge('A', 'B', 3)
g.addDirectedWeightedEdge('A', 'D', 4)
g.addDirectedWeightedEdge('D', 'C', 3)
g.addDirectedWeightedEdge('D', 'E', 8)
g.addDirectedWeightedEdge('E', 'F', 10)
g.addDirectedWeightedEdge('B', 'G', 9)
g.addDirectedWeightedEdge('E', 'G', 50)

console.log(dijkstrasAlgorithm(g, 'A'))
