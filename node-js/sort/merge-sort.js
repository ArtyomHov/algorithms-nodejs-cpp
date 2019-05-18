const merge = (arrOne, arrTwo) => {
  const sorted = []

  while (arrOne.length && arrTwo.length) {
    if (arrOne[0] > arrTwo[0]) {
      sorted.push(arrTwo[0])
      arrTwo.shift()
    } else {
      sorted.push(arrOne[0])
      arrOne.shift()
    }
  }
  while (arrOne.length) {
    sorted.push(arrOne[0])
    arrOne.shift()
  }
  while (arrTwo.length) {
    sorted.push(arrTwo[0])
    arrTwo.shift()
  }

  return sorted
}

const mergeSort = (arr) => {
  if (arr.length === 1) {
    return arr
  }

  let middle = Math.floor(arr.length / 2)
  let arrOne = arr.slice(0, middle)
  let arrTwo = arr.slice(middle)

  arrOne = mergeSort(arrOne)
  arrTwo = mergeSort(arrTwo)

  return merge(arrOne, arrTwo)
}

module.exports = mergeSort
