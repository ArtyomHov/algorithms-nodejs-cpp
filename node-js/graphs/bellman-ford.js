const Graph = require('./graph')

const bellmanFordsAlgorithm = (graph, startVertex) => {
  const distances = {}
  const previousVertices = {}
  distances[startVertex] = 0
  graph.getAllVertices().forEach((vertex) => {
    previousVertices[vertex] = null
    if (vertex !== startVertex) {
      distances[vertex] = Infinity
    }
  })

  for (let i = 0; i < graph.getAllVertices().length - 1; i++) {
    Object.keys(distances).forEach((vertex) => {
      graph.getNeighbors(vertex).forEach((neighbor) => {
        console.log(vertex, neighbor)
        const edge = graph.findEdge(vertex, neighbor.node)
        const distanceToVertex = distances[vertex]
        const distanceToNeighbor = distanceToVertex + edge.weight
        if (distanceToNeighbor < distances[neighbor.node]) {
          distances[neighbor.node] = distanceToNeighbor
          previousVertices[neighbor.node] = vertex
        }
      })
    })
  }

  return {
    distances,
    previousVertices
  }
}

module.exports = bellmanFordsAlgorithm

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
g.addDirectedWeightedEdge('A', 'D', 3)
g.addDirectedWeightedEdge('D', 'C', 3)
g.addDirectedWeightedEdge('D', 'E', -3)
g.addDirectedWeightedEdge('E', 'F', 10)
g.addDirectedWeightedEdge('B', 'G', 9)
g.addDirectedWeightedEdge('E', 'G', 50)
console.log(bellmanFordsAlgorithm(g, 'A'))
