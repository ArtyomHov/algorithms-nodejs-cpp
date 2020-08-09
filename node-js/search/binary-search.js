const binarySearch = (arr, el) => {
  let start = 0
  let end = arr.length - 1
  let middle = Math.floor((start + end) / 2)

  while (arr[middle] !== el && start <= end) {
    if (arr[middle] < el) {
      start = middle + 1
    } else {
      end = middle - 1
    }
    middle = Math.floor((start + end) / 2)
  }
  return arr[middle] === el ? middle : -1
}

const arr = [1, 2, 3, 4, 6, 23, 65]

console.log(binarySearch(arr, 1))
