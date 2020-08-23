const multiplyMatrices = (mA, mB) => {
  const result = []

  for (let i = 0; i < mA.length; i++) {
    result[i] = []
    for (let j = 0; j < mA.length; j++) {
      result[i][j] = 0
      for (let k = 0; k < mB.length; k++) {
        result[i][j] += mA[i][k] * mB[k][j]
      }
    }
  }
  return result
}

module.exports = multiplyMatrices

const a = [[1, 2, 3], [4, 5, 6]]
const b = [[7, 8], [9, 10], [11, 12]]
console.log(multiplyMatrices(a, b))
