// Euclidean algorithm calculates greatest common divisor of two integers.
const gcd = (int1, int2) => {
  if (int2 === 0) {
    return int1
  } else {
    const remainder = int1 % int2
    return gcd(int2, remainder)
  }
}

console.log(gcd(12, 36))
console.log(gcd(21, 140))
console.log(gcd(121, 22))
