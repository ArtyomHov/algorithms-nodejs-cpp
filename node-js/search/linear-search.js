const linearSearch = (arr, el) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === el) {
      return i
    }
  }
  return -1
}

const arr = [1, 2, 3, 4, 6, 23, 65]

console.log(linearSearch(arr, 65))
