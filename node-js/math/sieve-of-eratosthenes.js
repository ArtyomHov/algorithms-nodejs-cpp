const generateSieve = (max) => {
  const isPrime = []
  const primes = []

  for (let i = 2; i <= max; i++) {
    isPrime[i] = true
  }

  for (let i = 2; i <= max; i++) {
    if (isPrime[i]) {
      for (let j = i * 2; j <= max; j += i) {
        isPrime[j] = false
      }
    }
  }
  isPrime.forEach((el, i) => el ? primes.push(i) : undefined)
  return primes
}

console.log(generateSieve(152))
