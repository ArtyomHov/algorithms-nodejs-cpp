class QueueElement {
  constructor (element, priority) {
    this.element = element
    this.priority = priority
  }
}

class PriorityQueue {
  constructor () {
    this.items = []
  }

  enqueue (element, priority) {
    const qElement = new QueueElement(element, priority)
    let contain = false

    // iterating through the entire
    // item array to add element at the
    // correct location of the Queue
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].priority > qElement.priority) {
        this.items.splice(i, 0, qElement)
        contain = true
        break
      }
    }
    // if the element have the highest priority
    // it is added at the end of the queue
    if (!contain) {
      this.items.push(qElement)
    }
  }

  dequeue () {
    // return the dequeued element
    // and remove it.
    if (this.isEmpty) {
      return 'Underflow'
    }
    return this.items.shift()
  }

  front () {
    if (this.isEmpty) {
      return 'No elements in Queue'
    }
    return this.items[0]
  }

  rear () {
    if (this.isEmpty) {
      return 'No elements in Queue'
    }
    return this.items[this.items.length - 1]
  }

  get isEmpty () {
    return this.items.length === 0
  }

  printPQueue () {
    let str = ''
    this.items.forEach((item) => {
      str += item.element + ' '
    })
    return str
  }
}

module.exports = PriorityQueue
