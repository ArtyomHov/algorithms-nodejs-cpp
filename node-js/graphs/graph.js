class Graph {
  constructor (noOfVertices) {
    this.noOfVertices = noOfVertices
    this.AdjList = new Map()
  }

  addVertex (v) {
    // initialize the adjacent list with a
    // null array
    this.AdjList.set(v, [])
  }

  getAllVertices () {
    const keys = []
    for (let i of this.AdjList.keys()) {
      keys.push(i)
    }

    return keys
  }

  getEdge (startVertex, endVertex) {
    const vertex = this.AdjList.getKey(startVertex.getKey())
    if (!vertex) {
      return null
    }

    return vertex.findEdge(endVertex)
  }

  getAllEdges () {
    const values = []
    for (let i of this.AdjList.keys()) {
      values.push(this.AdjList.get(i))
    }

    return values
  }

  getNeighbors (vertex) {
    return this.AdjList.get(vertex)
  }

  addEdge (v, w) {
    // get the list for vertex v and put the
    // vertex w denoting edge between v and w
    this.AdjList.get(v).push(w)

    // Since graph is undirected,
    // add an edge from w to v also
    this.AdjList.get(w).push(v)
  }

  findEdge (v, neighbor) {
    const vertex = this.AdjList.get(v)
    return vertex.find(el => el.node === neighbor)
  }

  addDirectedWeightedEdge (v, w, weight) {
    this.AdjList.get(v).push({ node: w, weight })
  }

  printGraph () {
    const getKeys = this.AdjList.keys()

    for (let i of getKeys) {
      const getValues = this.AdjList.get(i)
      let conc = ''

      for (let j of getValues) {
        conc += j + ' '
        console.log(i + ' -> ' + conc)
      }
    }
  }
}

module.exports = Graph
