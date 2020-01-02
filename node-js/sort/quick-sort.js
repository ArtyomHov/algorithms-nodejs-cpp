const swap = (arr, i, j) => {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

const partition = (arr, pivot, left, right) => {
  const pivotValue = arr[pivot]
  let partitionIndex = left
  for (let i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, partitionIndex)
      partitionIndex++
    }
  }
  swap(arr, right, partitionIndex)
  return partitionIndex
}

const sort = (arr, left, right) => {
  if (left < right) {
    const pivot = right
    const partitionIndex = partition(arr, pivot, left, right)

    sort(arr, left, partitionIndex - 1)
    sort(arr, partitionIndex + 1, right)
  }
  return arr
}

const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr
  }
  return sort(arr, 0, arr.length - 1)
}

module.exports = quickSort
