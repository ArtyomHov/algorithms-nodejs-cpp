const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length - 1; j > i; j--) {
      if (arr[j] < arr[j - 1]) {
        let key = arr[j]
        arr[j] = arr[j - 1]
        arr[j - 1] = key
      }
    }
  }
  return arr
}

module.exports = bubbleSort
